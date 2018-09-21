<template>
  <div class='page'>
    <Counter />
    <p>
      To get started, edit -- files in <code>./client</code> and save.
    </p>
    <Icon />
  </div>
</template>

<script>
import Counter from 'components/Counter'
export default {
  components: {
    Counter,
  },
}
</script>
<style lang='scss' scoped>
@import '../../assets/css/func.scss';
p {
  color: #333;
  font-size:rem(30px);
  code {
    color: green;
  }
}
</style>