<template>
	<view class="oa-notice-detail">
		
		<view class="article-meta">
			<view class="article-text">活动名称：{{ studyDetail.ngroupType}}</view>
			<view class="article-text">发布于</view>
			<text class="article-time">{{ studyDetail.newsTime }}</text>
			<view class="article-text" v-if="studyDetail.meetStartTime">开始时间：{{ studyDetail.meetStartTime }}</view>
			<view class="article-text" v-if="studyDetail.meetStartTime">结束时间：{{ studyDetail.meetEndTime }}</view>
		</view>
		<view class="article-content">
			<oa-parser lazy-load :html="studyDetail.content"></oa-parser>
		</view>
		<oa-empty
			info="暂无详情"
			v-if="!studyDetail && !loading"
		></oa-empty>
		<!--加载动画-->
		<rfLoading isFullScreen :active="loading"></rfLoading>
	</view>
</template>

<script>  
import { getObj } from '@/api/newsbase';
import { remote } from '@/api/admin/dict'
import moment from '@/common/moment';
import oaParser from '@/components/oa-parser';
export default {
	components: {
		oaParser,
	},
	data() {
		return {
			studyDetail: {},
			appName: this.$mSettingConfig.appName,
			id: undefined,
			loading: true
		};
	},
	filters: {
		// 时间格式化
		time(val) {
			return moment(val * 1000).format('YYYY-MM-DD HH:mm');
		},
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
		this.getStudyDetail(event.id);
	},
	methods: {
		// 获取详情
		async getStudyDetail(id) {
			await this.$http
				.get(`${getObj}${id}`)
				.then(r => {
					this.loading = false;
					this.studyDetail = r.data;
					uni.setNavigationBarTitle({
						title: r.data.title
					});
					this.getDict('ngroup_type')
				})
				.catch(() => {
					this.loading = false;
				});
		},
		getDict(type) {
			this.$http
				.get(`${remote}`+type)
				.then(r => {
					var list = r.data
					this.studyDetail.ngroupType = this.init(this.studyDetail.ngroupType, list)
				})
		},
		init(val, list, def){
			let text = def || ''
			if(val && val !== '') {
			  let vals = val.split(',')
			  vals.forEach((row, i) => {
			    list.forEach(item => {
			      if (item.value === row) {
			        if(text === '') {
			          text = item.label
			        } else {
			          text += ',' + item.label
			        }
			      }
			    })
			  })
			}
			return text    
		}
	}
};
</script>

<style lang="scss">
.oa-notice-detail {
	.banner {
		overflow: hidden;
		position: relative;
		background-color: #ccc;
		.banner-img {
			height: 300upx;
			width: 100%;
		}
		.banner-title {
			max-height: 84upx;
			overflow: hidden;
			position: absolute;
			bottom: 0;
			width: 100%;
			font-size: 32upx;
			font-weight: 400;
			line-height: 42upx;
			color: white;
			z-index: 11;
			background-color: rgba(0, 0, 0, 0.25);
			padding: 4upx 20upx;
		}
	}
	.banner-title {
		padding: $spacing-lg $spacing-lg 0;
		font-size: $font-lg;
	}
	.article-meta {
		padding: 20upx 30upx;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-flow: wrap;
		color: gray;

		.article-text {
			font-size: 30upx;
			margin: 0 20upx;
		}

		.article-author,
		.article-time {
			font-size: 32upx;
		}
	}

	.article-content {
		padding: 0 30upx;
		overflow: hidden;
		font-size: 30upx;
		margin-bottom: 30upx;
	}
}
</style>
