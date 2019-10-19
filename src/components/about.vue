<template>
  <main>
    <div class="flex">
      <img src="../assets/my.jpg" alt="">
      <div class="profile">
        <p>フロントエンドエンジニア / UI・UXデザイナー</p>
        <dl>
          <div class="flex" v-for="(item,index) in profile" :key="profile[item]">
            <dt>{{index}}：</dt>
            <dd>{{item}}</dd>
          </div>
        </dl>
      </div>
    </div>
    <p class="text">現在WEB制作会社でフロントエンドエンジニアを８割、UI・UXデザイナーを２割をやっています。<br>
      フロント業務は企業サイト・ブランドサイト作成、<br>
      デザイン業務は社内スタートアップ事業であるWEBサービスのUI・UXのデザインをしています。<br>
      仕事で一番大切にしているのはコミュニケーションです。<br>
      常にチームワークを意識して良いもの、組織を創ることを意識しています。<br>
    </p>
  </main>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        profile: {
          name: "カミナガ　ナツキ",
          age: "25",
          from: "茨城",
        }
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .profile {
    margin: 30px;
  }

  .profile dl {
    margin-top: 20px;
  }

  .profile dl>div {
    margin-bottom: 5px;
  }
  .text{
    margin-top: 20px;
  }
</style>
