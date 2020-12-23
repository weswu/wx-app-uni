<template>
	<view class="content">
		<view class="advance-area" v-if="list.length > 0">
			<view class="flex-box tc thead">
				<view class="item-3">姓名</view>
				<view class="item-3">联系号码</view>
				<view class="item-3">签到状态</view>
			</view>
			<view
				class="flex-box table tc"
				v-for="(item, index) in list"
				:key="index"
			>
				<view class="item-3">
					{{ item.name }}
				</view>
				<view class="item-3">
					{{ item.phone }}
				</view>
				<view class="item-3">
					<view @click="toggle(item)"
					  :style="'color:#' + (item.signStatus === '1' ? '5cb87a' : '999')">
					    <text>{{item.signStatus | sign}}</text>
					    <text class="iconfont iconjiazailoading-A"></text>
					  </view>       
				</view>
			</view>
		</view>
		<oa-empty :info="'还没有党员~'" v-if="list.length === 0 && !loading"></oa-empty>
	</view>
</template>

<script>
import { putObj } from '@/api/newsbase'
import { fetchList } from '@/api/member';
import moment from '@/common/moment';
import listCell from '@/components/oa-list-cell';
export default {
	data() {
		return {
			detail: {},
			list: [],
			selected: [],
			memberList: [],
			appName: this.$mSettingConfig.appName,
			id: undefined,
			loading: true
		};
	},
	filters: {
		sign(val) {
			let text = '';
			let array = [
				{value: '0', label: '未签到'},
				{value: '1', label: '已签到'},
			]
			array.forEach(item => {
				if(item.value === val) {
					text = item.label
				}
			})
			return text;
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
		this.detail = uni.getStorageSync('detail');
		this.getList(this.detail.partyId)
	},
	methods: {
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
					this.selected = [...this.selected, ...r.data.records];
					this.initSign()
				})
				.catch(() => {
					this.loading = false;
				});
		},
    initSign() {
      var ctx = this
      this.$http.get('/nfnet/newssign/page', {
          current: 1,
          size: 1000,
          nbid: this.detail.id
        }).then(res => {
        var array = res.data.records
        ctx.value = []
        this.list.forEach((item, i) => {
          ctx.value.push(item.memberId)
        })
        let list = []
        this.selected.forEach((item, i) => {
          let col = {
            nbid: this.detail.id,
            signStatus: '0',
            memberId: item.id,
            name: item.name,
            phone: item.mobileNo
          }
          var bol = false
          array.forEach((row, j) => {
            if (item.id === row.memberId) {
              bol = true
              list.push(row)
            }
          })
          if (!bol) {
            list.push(col)
          }
        })
        this.list = list
				console.log(list)
      })
    },  
		toggle(item) {
			if(item.signStatus === '0') {
				item.signStatus='1'
			} else {
				item.signStatus='0'
			}
      this.detail.memberList = this.list
			this.$http.put(putObj, this.detail)
		}
	}
};
</script>

<style lang="scss">
$color: #e0e0e0;
.content {
	padding: 0upx 0upx 20upx 0upx;
	display: flex;
	flex: 1;
	flex-direction: column;
	/*background-color: #fbf9fe;*/
}
.iconjiazailoading-A{
	padding-left: 10upx;
}
.flex-box {
	display: flex;
	flex-wrap: wrap;
}

.flex-box > .item-2 {
	flex: 0 0 50%;
}

.flex-box > .item-3 {
	flex: 0 0 33.3333%;
}

.flex-box > .item-4 {
	flex: 0 0 25%;
}

//普通表格
.genaral-area {
	.item-2 {
		font-size: 26upx;
		border: 1upx solid $color;
		border-width: 1upx 1upx 0 0;
		padding: 16upx 0;
		box-sizing: border-box;
		text-align: center;

		&:first-child {
			border-left-width: 1upx;
		}

		&:last-child {
			border-right-width: 1upx;
		}
	}

	.thead {
		.item-2 {
			font-weight: bold;

			box-sizing: border-box;
		}
	}

	.table {
		&:last-child {
			border-bottom: 1upx solid $color;
		}

		.item-2 {
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
		}
	}
}

// 多行合并表格
.advance-area {
	.item-3,
	.item-4 {
		font-size: 26upx;
		border: 1upx solid $color;
		border-width: 1upx 1upx 0 0;
		box-sizing: border-box;
		text-align: center;
		&:first-child {
			border-left-width: 1upx;
		}

		&:last-child {
			border-right-width: 1upx;
		}
	}

	.thead {
		.item-3,
		.item-4 {
			font-weight: bold;
			padding: 16upx 0;
			box-sizing: border-box;
		}
	}

	.table {
		&:last-child {
			border-bottom: 1upx solid $color;
		}

		.item-3,
		.item-4 {
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: border-box;
			padding: 15upx 0;
		}
	}

	.table-flex {
		flex: 1;

		.item {
			border-bottom: 1upx solid $color;
			padding: 10upx 0;
			box-sizing: border-box;

			&:last-child {
				border-width: 0;
			}
		}
	}
}
</style>
