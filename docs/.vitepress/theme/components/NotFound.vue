<template>
  <el-empty
    description="斑鹿，滕波尔国家公园，印度 (© Ondrej Prosicky/Shutterstock)"
    image="https://cn.bing.com/th?id=OHR.SpottedDeers_ZH-CN8790816034_UHD.jpg"
    :image-size="600"
  >
    <blockquote id="desc">404 NOT FOUND</blockquote>
    <a :href="site.base" aria-label="go to home">Go to home</a>
  </el-empty>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';

const { site } = useData();
</script>

<style>
#desc {
  color: var(--color-strong) !important;
  font-weight: 500;
  white-space: initial;
}
</style>
