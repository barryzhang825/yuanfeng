<template>
  <div class="about-page">
    <div class="pc" v-if="!isMobile">
      <Header :menu-id="6"></Header>
      <div class="banner">
        <div class="text">联系我们</div>
        <div class="text2">打造一流的机械设备</div>
      </div>
      <div class="map-box">
        <Map height="500px" :is-mobile="false"></Map>
      </div>
      <div class="contact-box">
        <div class="left">
          <div class="left-title">联系我们</div>
          <div class="line">
            <img src="../../../../public/images/phone.png" alt />
            <div class="text">电话：{{footerList.contactUs.phoneNumber}}</div>
          </div>
          <div class="line line2">
            <img src="../../../../public/images/email.png" alt />
            <div class="text">邮箱：{{footerList.contactUs.email}}</div>
          </div>
          <div class="line">
            <img src="../../../../public/images/address.png" alt />
            <div class="text">地址：{{footerList.contactUs.address}}</div>
          </div>
        </div>
        <div class="right">
          <div class="title">提交留言</div>

          <div class="inputs">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
              <el-form-item prop="name">
                <el-input class="in" v-model="ruleForm.name" placeholder="姓名"></el-input>
              </el-form-item>
              <el-form-item prop="phoneNumber">
                <el-input class="in" v-model="ruleForm.phoneNumber" placeholder="电话"></el-input>
              </el-form-item>
              <el-form-item prop="email">
                <el-input class="in" v-model="ruleForm.email" placeholder="邮箱"></el-input>
              </el-form-item>
              <el-form-item prop="detail">
                <el-input
                  class="in"
                  type="textarea"
                  :autosize="{ minRows: 5, maxRows: 10}"
                  placeholder="请输入留言内容"
                  v-model="ruleForm.detail"
                ></el-input>
              </el-form-item>
              <el-row class="submit-row">
                <div @click="submitForm('ruleForm')" class="submit-button" type="primary">提交</div>
              </el-row>
            </el-form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    <MobileContactUs v-if="isMobile"></MobileContactUs>
  </div>
</template>

<script>
import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";
import Map from "@/components/Map/index";
import MobileContactUs from "@/views/mobile/contact-us/contact-us";
import { CompanyCulList } from '@/api/mobile'
import {fetchFooterList} from "@/api/home";

export default {
  name: "ContactUs",
  components: {
    Header,
    Footer,
    Map,
    MobileContactUs
  },
  props: ['isMobile'],
  data () {
    return {
      ruleForm: {
        name: '',
        email: '',
        phoneNumber: '',
        detail: '',
      },
      footerList:{
        contactUs:{
          phoneNumber:''
        }
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入邮箱', trigger: ['blur', 'change'] }
        ],
        phoneNumber: [
          { required: true, message: '请输入电话号码', trigger: 'blur' }
        ],
        detail: [
          { required: true, message: '请输入留言内容', trigger: 'blur' },
          { min: 0, max: 500, message: '留言内容不能超过500个字符', trigger: 'blur' }
        ],
      }
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData(){
      let footerList=await fetchFooterList()
      this.footerList=footerList.data
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let formData = new FormData();
          formData.append('email', this.ruleForm.email)
          formData.append('phone', this.ruleForm.phoneNumber)
          formData.append('detail', this.ruleForm.detail)
          formData.append('name', this.ruleForm.name)
          //console.log(this.ruleForm)
          CompanyCulList(this.ruleForm).then(res => {
            //console.log(res,2222)
            this.$message({
              message: res.msg,
              type: 'success'
            })
          })
        } else {
          //console.log('error submit!!');
          return false;
        }
      });
    },
    retrieveData () {
      CompanyCulList()
      //console.log(data, "123")
    },
  },
  created () {

  }
}
</script>

<style scoped lang="scss">
.about-page {
  width: 100%;

  .pc {
    width: 100%;
    min-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;

    .banner {
      min-width: 1200px;
      width: 100%;
      height: 350px;
      background-image: url('../../../../public/images/about_us.png');
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .text {
        font-size: 40px;
        color: #fff;
      }

      .text2 {
        margin-top: 30px;
        font-size: 24px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }

    .map-box {
      padding: 50px 0;
      width: 1200px;
    }

    .contact-box {
      width: 100%;
      min-width: 1200px;
      height: 780px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      background: rgba(245, 245, 245, 1);

      .left {
        position: relative;
        left: 100px;
        width: 586px;
        height: 586px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 1px 30px 0px rgba(136, 148, 164, 0.31);
        padding: 80px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .left-title {
          font-size: 24px;
          font-weight: 400;
          color: rgba(52, 52, 52, 1);
          border-left: 4px solid #de2022;
          padding-left: 10px;
          margin-bottom: 100px;
        }

        .line {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;

          img {
            margin-right: 20px;
            width: 48px;
            height: 48px;
            border: 1px solid rgba(255, 255, 255, 1);
            border-radius: 50%;
          }

          .text {
            font-size: 16px;
            font-weight: 400;
          }
        }

        .line2 {
          margin: 40px 0;
        }
      }

      .right {
        width: 60%;
        background: rgba(55, 82, 182, 1);
        height: 100%;

        padding: 80px 80px 80px 200px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .title {
          font-size: 24px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          border-left: 4px solid #fff;
          padding-left: 10px;
          margin-bottom: 100px;
        }

        .inputs {
          width: 533px;
          display: flex;
          flex-direction: column;

          .in >>> .el-input__inner {
            background-color: #f7f7f7 !important;
            border: none;
            padding: 20px;
          }

          .el-textarea >>> .el-textarea__inner {
            background-color: #f7f7f7 !important;
            border: none;
          }

          .submit-row {
            padding: 50px 0;
            text-align: left;

            .submit-button {
              width: 118px;
              height: 38px;
              border: 1px solid rgba(255, 255, 255, 1);
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 16px;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              line-height: 305px;
            }
          }
        }
      }
    }
  }
}
</style>
