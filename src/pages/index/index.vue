<template>
	<view class="content">
		<view class="badge" />
		<view class="text-area">
			<text class="title">{{ greeting }}</text>
			<text class="sub">Pinia 计数: {{ tapCount }}</text>
			<button class="btn" size="mini" @click="onTap">点我 +1</button>
		</view>
	</view>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useGreeting } from "@/composables/useGreeting";
import { useAppStore } from "@/store/app";

const { greeting } = useGreeting("uni-js-starter");
const app = useAppStore();
const { tapCount } = storeToRefs(app);

function onTap() {
	app.increment();
}
</script>

<style scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 60vh;
}

.badge {
	width: 160rpx;
	height: 160rpx;
	border-radius: 24rpx;
	background: linear-gradient(135deg, #42b983, #3478f6);
	margin-bottom: 48rpx;
}

.text-area {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16rpx;
}

.title {
	font-size: 36rpx;
	color: #333333;
}

.sub {
	font-size: 28rpx;
	color: #666666;
}

.btn {
	margin-top: 24rpx;
}
</style>
