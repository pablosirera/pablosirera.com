<script>
import IconBase from '@/components/ui/IconBase.vue'

export default {
  name: 'IconMixin',
  components: { IconBase },
  props: {
    width: {
      type: [Number, String],
      default: 18,
    },
    height: {
      type: [Number, String],
      default: 18,
    },
    iconColor: {
      type: String,
      default: 'currentColor',
    },
  },
}
</script>
