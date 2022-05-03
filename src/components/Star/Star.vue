<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item"  v-for="(sc , index) in starArr" :key="index" :class="sc"></span>
  </div>
</template>

<script>
export default {
  props:{
    size:Number,
    score:Number
  },
  computed:{
    starArr() {
      const scs = []
      const {score} = this
      //根据评分整数部分大小决定加入几个‘on’
      const scsInt = Math.floor(score)
      for (let i = 0; i < scsInt; i++) {
        scs.push('on')
      }
      //根据小数点后数字是否大于5决定加入几个‘half’
      if(score*10 - scsInt*10 > 5) {
        scs.push('half')
      }
      //根据scs数组的剩余长度来决定加入几个‘off’
      while(scs.length < 5) {
        scs.push('off')
      }
      return scs
    }
  }
}
</script>

<style lang="stylus">
@import "../../common/stylus/mixins.styl"
.star //2x图 3x图
  float left
  font-size 0
  .star-item
    display inline-block
    background-repeat no-repeat
  &.star-48
    .star-item
      width 20px
      height 20px
      margin-right 22px
      background-size 20px 20px
      &:last-child
        margin-right: 0
      &.on
        bg-image('./images/stars/star48_on')
      &.half
        bg-image('./images/stars/star48_half')
      &.off
        bg-image('./images/stars/star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      margin-right 6px
      background-size 15px 15px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/stars/star36_on')
      &.half
        bg-image('./images/stars/star36_half')
      &.off
        bg-image('./images/stars/star36_off')
  &.star-24
    .star-item
      width 10px
      height 10px
      margin-right 3px
      background-size 10px 10px
      &:last-child
        margin-right 0
      &.on
        bg-image('./images/stars/star24_on')
      &.half
        bg-image('./images/stars/star24_half')
      &.off
        bg-image('./images/stars/star24_off')
</style>