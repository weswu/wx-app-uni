// websocket 方法集合
import $mConfig from '@/config/index.config';
import $mWebsocketConfig from '@/config/websocket.config';
import $mHelper from '@/utils/helper';
import $mStore from '@/store';
class websocket {
	constructor() {
		this.conncted = false;
		this.login = false;
		this.serviceList = [];
		this.fd = null;
	}

	// 初始化websocketet
	initWebsocket() {
		if (!$mStore.state.accessToken) {
			$mHelper.log('未登录');
			return;
		}

		// 连接webSocket
		uni.connectSocket({ url: $mConfig.websocketUrl });

		// 监听webSocket连接成功
		uni.onSocketOpen(res => {
			this.conncted = true;
			if ($mStore.state.isImPanel) {
				let params = {
					tip: true,
					content: '连接成功，正在准备会话连线...'
				};
				$mStore.commit('addImHistory', params);
			}
			this.send(
				JSON.stringify({
					route: $mWebsocketConfig.login,
					token: $mStore.state.accessToken
				})
			);
			setInterval(() => {
				this.send(JSON.stringify({ route: $mWebsocketConfig.ping }));
			}, 60 * 1000);
		});

		// 监听webSocket出错
		uni.onSocketError(res => {
			this.conncted = false;
			this.login = false;
			setTimeout(() => {
				this.initWebsocket();
			}, 10 * 1000);
		});

		uni.onSocketClose(res => {
			this.conncted = false;
			this.login = false;
			setTimeout(() => {
				this.initWebsocket();
			}, 10 * 1000);
		});

		uni.onSocketMessage(this.websocketOnMessage);
	}

	// 发送消息
	send(data) {
		if (!this.conncted) {
			if ($mStore.state.isImPanel && !this.login) {
				let params = {
					tip: true,
					content: '正在重新连接客服服务，请稍候...'
				};
				$mStore.commit('addImHistory', params);
			}
			return;
		}
		uni.sendSocketMessage({ data });
	}

	// 关闭
	closeWebSocket() {
		if (!this.conncted) {
			return;
		}
		uni.closeSocket({
			success: () => {
				console.log('调用关闭websocket成功');
			},
			fail: () => {
				console.log('调用关闭websocket失败');
			}
		});
	}

	// 消息处理
	websocketOnMessage = e => {
		const data = JSON.parse(e.data);
		const _this = this;
		let params = {};
		if (data.route === $mWebsocketConfig.login) {
			this.login = true;
			if ($mStore.state.isImPanel) {
				let params = {
					tip: true,
					content: '客服连线成功'
				};
				$mStore.commit('addImHistory', params);
			}
			return;
		}
		if (data.route === $mWebsocketConfig.memberClose) {
			$mStore.commit('setIsStuffService', false);
		}
		if (data.route === $mWebsocketConfig.bubbleClose) {
			$mStore.commit('setIsStuffService', false);
			let params = {
				tip: true,
				content: '会话已结束，现在由机器人精灵为您服务'
			};
			$mStore.commit('addImHistory', params);
			return;
		}
		if (data.route === $mWebsocketConfig.serviceIndex) {
			this.serviceList = data.data;
			this.fd = data.member.fd;
			return;
		}
		switch (parseInt(data.code)) {
			case 1006:
				break;
			case 2000:
        // eslint-disable-next-line
        let content;
				switch (data.data.type) {
					case 'text':
						content = data.data.content.replace(
							new RegExp('\\[(.+?)\\]', 'g'),
							function(r) {
								return r;
							}
						);
						break;
					case 'voice':
						break;
					case 'video':
						break;
					case 'image':
						content =
							'<img style="max-width:200px" src="' +
							data.data.content +
							'"></img>';
						break;
					case 'longitudeAndLatitude':
						break;
					default:
						content = data.data.content;
						break;
				}
				params = {
					user_type: data.data.user_type,
					content,
					serviceNickname:
						data.data.user_type === 'member' ? '' : data.member.realname,
					avatar:
						data.data.user_type === 'member'
							? 'background-image:url(' + $mStore.state.userInfo.head_portrait + ')'
							: 'background-image:url(' + data.member.head_portrait + ')',
					created_at: data.timestamp
				};
				$mStore.commit('addImHistory', params);
				break;
			case 2001:
				this.fd = data.data.fd;
				if ($mStore.state.isImPanel) {
					let params = {
						tip: true,
						content: '会话连线成功，正在进行客服连线...'
					};
					$mStore.commit('addImHistory', params);
				}
				break;
			case 2002:
				break;
			case 2003:
				$mStore.commit('setIsStuffService', false);
				params = {
					tip: true,
					content: data.data
				};
				$mStore.commit('addImHistory', params);
				break;
			case 2005:
				$mStore.commit('setIsStuffService', true);
				params = {
					tip: true,
					content: data.message
				};
				$mStore.commit('addImHistory', params);
				break;
			case 4000:
				$mStore.commit('setIsStuffService', false);
				params = {
					tip: true,
					content: data.message
				};
				$mStore.commit('addImHistory', params);
				break;
			case 4104:
				$mStore.commit('setIsStuffService', false);
				params = {
					tip: true,
					content: data.message
				};
				$mStore.commit('addImHistory', params);
				break;
			case 4001:
				// 用户验证失败
				$mHelper.toast('您的登录令牌已过期,请重新登录~');
				$mStore.commit('logout', '');
				break;
			case 4002:
				break;
			case 4004:
				break;
			case 4101:
				// 用户在其它地方登录
				$mHelper.toast('您的账户已在其它地方登录');
				$mStore.commit('logout', '');
				break;
			case 4102:
				params = {
					tip: true,
					content: data.message
				};
				$mStore.commit('addImHistory', params);
				break;
			case 5000:
				break;
			default:
				break;
		}
	};

}
// eslint-disable-next-line
export default new websocket();
