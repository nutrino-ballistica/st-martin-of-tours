<template>
  <div class="worship">
    <p>As part of the Apostolic and Sacramental Traditions, St Martin’s offers
    the seven Sacraments to help us touch the Indwelling Light and remember our
    Divine origins.</p>

    <p>We offer open communion to any who wish to partake of the Sacraments,
    regardless of race, sex, or orientation. </p>

    <h3 class="section-title">Mass</h3>

    <p>We are holding services on fourth Thursdays at 7pm at the
    Church of St. David, located at 53 Albert Joyner Sr. Road, Old Fort, NC
    28711.</p>

    <h3 class="section-title">Marriage</h3>

    <p>Weddings may be scheduled with the Priest in charge.  We are LGBT+
    inclusive.</p>

    <h3 class="section-title">Baptism</h3>

    <p>Anyone who wishes to deepen your connection with God by receiving the
    Christian Initiatory Sacrament of Baptism is encouraged to contact us to set
    up a time for this most special Rite.</p>

    <h3 class="section-title">Reconciliation</h3>

    <p>We all miss the mark sometimes.  While our church does not focus on
    doctrines of “sin,” it is often helpful and healing to seek reconciliation
    through confession and absolution when you are facing personal struggles.
    Anyone who wishes to schedule a confession with the Priest may contact us to
    set up a time.</p>

    <h3 class="section-title">Healing</h3>

    <p>Anyone who is sick, physically or spiritually, may request the anointing
    Sacrament of Unction for the healing of the sick.  Please contact the church
    to schedule this Sacrament.</p>

    <Disclaimer />
  </div>
</template>

<script lang="ts">
import Disclaimer from '@/components/Disclaimer.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Disclaimer
  }
})
export default class Worship extends Vue {}
</script>

<style lang="less">
.worship {
  text-align: left;

  > * {
    width: 100%;
  }

  .section-title {
    text-decoration: underline;
  }
}
</style>
