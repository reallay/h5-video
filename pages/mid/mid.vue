<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		name:'mid',
		onShow(){
			
		},
		onLoad(option){
			let uid = option.uid;
			let token = option.token;
			let ns_device_id = option.ns_device_id;
			let videoId = option.videoId;
			uni.setStorageSync('uid',uid)
			uni.setStorageSync('token',token)
			uni.setStorageSync('ns_device_id',ns_device_id)
			
			console.log(uid)
			console.log(token)
			console.log(ns_device_id)
			console.log(videoId)
			uni.reLaunch({
				url:'/pages/index/video?uid=' + uid + '&token=' + token + '&ns_device_id=' + ns_device_id+'&id='+videoId
			})
		}
	}
</script>

<style>
</style>
