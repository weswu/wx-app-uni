<template>
	<view class="oa-notice-detail">
		<view class="article-content">
			<view class="promotion-center">
				<list-cell icon="icontubiao2" :iconColor="themeColor.color" @eventClick="navToLogin('/pages/study/sign')" title="签到"></list-cell>
				<list-cell icon="icongonggao" :iconColor="themeColor.color" @eventClick="navToLogin('/pages/notice/notice')" title="通知公告"></list-cell>
			</view>
		</view>
		<oa-empty
			info="暂无详情"
			v-if="!detail && !loading"
		></oa-empty>
	</view>
</template>

<script>
import { getObj } from '@/api/newsbase';
import { fetchList } from '@/api/member';
import moment from '@/common/moment';
	import listCell from '@/components/oa-list-cell';
export default {
	data() {
		return {
			detail: {},
			list: [],
			appName: this.$mSettingConfig.appName,
			id: undefined,
			loading: true
		};
	},
	onShow() {
		uni.setNavigationBarColor({
		    frontColor: '#ffffff',
		    backgroundColor: this.themeColor.color,
		    animation: {
		      duration: 400,
		      timingFunc: 'easeIn'  
		    }
		})
	},
	onLoad(event) {
		this.id = event.id;
		this.getDetail(event.id);
	},
	methods: {
		// 获取详情
		async getDetail(id) {
			await this.$http
				.get(`${getObj}${id}`)
				.then(r => {
					this.loading = false;
					this.detail = r.data;
					this.getList(this.detail.partyId)
				})
				.catch(() => {
					this.loading = false;
				});
		},
		// 获取人员列表
		async getList(id) {
			await this.$http
				.get(`${ fetchList }`, {
					current: 1,
					size: 1000,
          partyId: id || '4'
				})
				.then(r => {
					this.loading = false;
					this.list = [...this.list, ...r.data.records];
				})
				.catch(() => {
					this.loading = false;
				});
		},
	}
};
</script>

<style lang="scss">
.oa-notice-detail {
	.article-content {
		padding: 0 30upx;
		overflow: hidden;
		font-size: 30upx;
		margin-bottom: 30upx;
	}
}
</style>
