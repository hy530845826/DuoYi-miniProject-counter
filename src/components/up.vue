<template>
  <div id="up">
    <table>
      <tr>
        <th id="ys1">
          蓝色：
          <input type="number" v-model="lvbox[0]" />
        </th>
        <th id="ys2">
          紫色：
          <input type="number" v-model="lvbox[1]" />
        </th>
        <th id="ys3">
          橙色：
          <input type="number" v-model="lvbox[2]" />
        </th>
        <th id="ys4">
          红色：
          <input type="number" v-model="lvbox[3]" />
        </th>
        <th id="ys5">
          白金：
          <input type="number" v-model="lvbox[4]" />
        </th>
      </tr>
      <tr>
        <th colspan="2">
          当前：第
          <input type="number" v-model="day" />天游戏
        </th>
        <th>
          是否充值VIP
          <div>是 否</div>
          <input
            type="radio"
            name="test"
            v-for="(item,index) in list"
            :value="item.value"
            v-model="checkedValue"
          />
        </th>
        <th>
          每天上阵角色经验奖励：
          <input type="number" v-model="exp_shangzhen" />
        </th>
        <th>
          每天VIP额外经验：
          <input type="number" v-model="exp_tongguan_vip" />
        </th>
      </tr>
      <tr>
        <td colspan="2">
          每天通关金币可转换经验：
          <input type="number" v-model="exp_tongguan" />
        </td>
        <td colspan="2">
          每天可分配经验：
          <span id="exp_fenpei">{{exp_fenpei_sum}}</span>
        </td>
        <td>
          <div>
            技能+1消耗:
            <b>30</b>
            经验
          </div>
          <div>
            技能+2消耗:
            <b>100</b>
            经验
          </div>
        </td>
      </tr>
      <tr>
        <th>角色</th>
        <th>品质</th>
        <th>人物经验 （总共已分配：{{exp_fenpei}}）</th>
        <th>技能经验</th>
        <th>人物总经验</th>
      </tr>
      <tr>
        <td>天策</td>
        <td>{{chenghao[0]}}</td>
        <td>
          分配：
          <input type="number" v-model="exp_num[0]" />
          + 每日：{{exp_day}}
        </td>
        <td>
          分配：
          <input type="number" v-model="exp_sk_num[0]" />
        </td>
        <td>{{exp_sum[0]}}</td>
      </tr>
      <tr>
        <td>龙宫</td>
        <td>{{chenghao[1]}}</td>
        <td>
          分配：
          <input type="number" v-model="exp_num[1]" />
          + 每日：{{exp_day}}
        </td>
        <td>
          分配：
          <input type="number" v-model="exp_sk_num[1]" />
        </td>
        <td>{{exp_sum[1]}}</td>
      </tr>
      <tr>
        <td>方寸</td>
        <td>{{chenghao[2]}}</td>
        <td>
          分配：
          <input type="number" v-model="exp_num[2]" />
          + 每日：{{exp_day}}
        </td>
        <td>
          分配：
          <input type="number" v-model="exp_sk_num[2]" />
        </td>
        <td>{{exp_sum[2]}}</td>
      </tr>
      <tr>
        <td>佛门</td>
        <td>{{chenghao[3]}}</td>
        <td>
          分配：
          <input type="number" v-model="exp_num[3]" />
          + 每日：{{exp_day}}
        </td>
        <td>
          分配：
          <input type="number" v-model="exp_sk_num[3]" />
        </td>
        <td>{{exp_sum[3]}}</td>
      </tr>
      <tr></tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "window-up",
  data: function () {
    return {
      day: 1,
      exp_shangzhen: 1,
      exp_tongguan: 10,
      exp_tongguan_vip: 1,
      exp_fenpei_sum: 0,
      exp_fenpei: 0,
      exp_day: 0,
      exp_num: [0, 0, 0, 0],
      exp_sk_num: [0, 0, 0, 0],
      checkedValue: false,
      list: [{ value: true }, { value: false }],
      exp_sum: [0, 0, 0, 0],
      chenghao: ["绿", "绿", "绿", "绿"],
      lvbox: [1, 3, 12, 60, 360],
    };
  },
  methods: {
    exp_f5: function () {
      var that = this;
      setInterval(function () {
        that.exp_day = that.day * that.exp_shangzhen;
        if (that.checkedValue == true) {
          that.exp_fenpei_sum =
            that.day *
            (parseInt(that.exp_tongguan) + parseInt(that.exp_tongguan_vip));
        } else {
          that.exp_fenpei_sum = that.day * that.exp_tongguan;
        }
        for (var index in that.exp_sum) {
          that.exp_sum[index] =
            parseInt(that.exp_num[index]) + parseInt(that.exp_day);
          if (that.exp_sum[index] >= that.lvbox[4]) {
            that.$set(that.chenghao, index, "白金");
          } else if (that.exp_sum[index] >= that.lvbox[3]) {
            that.$set(that.chenghao, index, "红");
          } else if (that.exp_sum[index] >= that.lvbox[2]) {
            that.$set(that.chenghao, index, "橙");
          } else if (that.exp_sum[index] >= that.lvbox[1]) {
            that.$set(that.chenghao, index, "紫");
          } else if (that.exp_sum[index] >= that.lvbox[0]) {
            that.$set(that.chenghao, index, "蓝");
          } else {
            that.$set(that.chenghao, index, "绿");
          }
        }
        that.exp_fenpei =
          parseInt(that.exp_num[0]) +
          parseInt(that.exp_sk_num[0]) +
          parseInt(that.exp_num[1]) +
          parseInt(that.exp_sk_num[1]) +
          parseInt(that.exp_num[2]) +
          parseInt(that.exp_sk_num[2]) +
          parseInt(that.exp_num[3]) +
          parseInt(that.exp_sk_num[3]);
      }, 100);
    },
  },
  mounted() {
    this.exp_f5();
  },
};
</script>