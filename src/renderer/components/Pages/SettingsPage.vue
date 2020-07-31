<template>
  <div>
    <ContentBlock title="软件设置">
      Content block
    </ContentBlock>
    <ContentBlock title="守护设置">
      Content block
    </ContentBlock>
    <ContentBlock title="关于">
      Content block
    </ContentBlock>
    <ContentBlock>
      Content block [with no title]
    </ContentBlock>
  </div>
</template>

<script>
import ContentBlock from "../ContentBlock";

export default {
  name: "SettingsPage",
  components: {ContentBlock}
}
</script>

<style scoped>

</style>