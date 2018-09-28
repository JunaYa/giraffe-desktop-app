<template>
  <div id="wrapper">
    <canvas class="background"></canvas>
    <header>
    </header>
    <main>
      <ProjectBoardLayout/>
      <SubjectBoardLayout/>
      <UnitBoardLayout/>
    </main>
    <footer>
    </footer>
  </div>
</template>

<script>
  import particles from 'particlesjs';
  import SystemInformation from './LandingPage/SystemInformation';
  import ProjectBoardLayout from './sections/BoardProjectLayout';
  import SubjectBoardLayout from './sections/BoardSubjectLayout';
  import UnitBoardLayout from './sections/BoardUnitLayout';

  export default {
    name: 'landing-page',
    components: {
      SystemInformation,
      ProjectBoardLayout,
      SubjectBoardLayout,
      UnitBoardLayout,
    },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
    },
    mounted() {
      particles.init({
        selector: '.background',
        maxParticles: 86,
        sizeVariations: 4,
        speed: 0.05,
        color: ['#333333', '#666666', '#999999'],
        minDistance: 108,
        connectParticles: false,
      });
    },
  };
</script>

<style lang="scss">

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
  }

  #wrapper {
    height: 100vh;
    width: 100vw;
  }

  header,
  footer{
    width: 100vw;
    height: 6vh;
    background: $color-primary;
  }
  main {
    display: flex;
    flex-direction: row;
    height: 100vh - 6vh - 6vh;
  }
  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

</style>
