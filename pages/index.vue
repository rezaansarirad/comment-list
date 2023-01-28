<template>
  <div class="content">
    <div>
      <Header />
      <commentsList />
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 1rem;

    width: 66.666667%;
    height: 66.666667%;
  }
}
</style>
