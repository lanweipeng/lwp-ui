<template>
  <div class="lwp-tabs">
      <div class="lwp-tabs-labels">
      <div class="lwp-tabs-label-item" 
      @click="onTabClick(label.name)"
      v-for=" label in labels" :key="label.index">{{label.label}}</div>
      </div>
      <slot/>
  </div>
</template>