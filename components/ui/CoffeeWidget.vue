<template>
  <div class="flex justify-center flex-col items-center mt-8">
    <h2 class="pb-4 text-lg">¿Te gusta mi contenido?</h2>
    <a
      class="coffee-button"
      target="_blank"
      href="https://www.buymeacoffee.com/VD4nJSu"
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Invítame a un café"
        loading="lazy"
      />
      <span class="coffee-text">
        <!-- TODO: integrate translations -->
        Invítame a un café
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CoffeeWidget',
}
</script>

<style lang="scss" scoped>
// TODO: integrate tailwind
.coffee-button {
  line-height: 35px;
  height: 51px;
  min-width: 217px;
  text-decoration: none;
  display: inline-flex;
  color: #fff;
  background-color: theme('colors.primary');
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 7px 10px 7px 10px;
  font-size: 28px;
  letter-spacing: 0.6px;
  box-shadow: 0 1px 2px rgba(190, 190, 190, 0.5);
  -webkit-box-shadow: 0 1px 2px 2px rgba(190, 190, 190, 0.5);
  margin: 0 auto;
  font-family: 'Cookie', cursive;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -o-transition: 0.3s all linear;
  -webkit-transition: 0.3s all linear;
  -moz-transition: 0.3s all linear;
  -ms-transition: 0.3s all linear;
  transition: 0.3s all linear;

  img {
    height: 34px;
    width: 35px;
    margin-bottom: 1px;
    box-shadow: none;
    border: none;
    vertical-align: middle;
  }

  &:hover,
  &:active,
  &:focus {
    -webkit-box-shadow: 0 1px 2px 2px rgba(190, 190, 190, 0.5);
    text-decoration: none;
    box-shadow: 0 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color: #fff;
  }
}

.coffee-text {
  margin-left: 15px;
  font-size: 28px;
}
</style>
