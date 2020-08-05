<template>
  <div id="app">
    <div id="rolebox">
      <div id="i_rolebox" class="cardbox">
        <h1>
          当前角色
          <select id="select_i_role">
            <option value="0">天策</option>
            <option value="1">龙宫</option>
            <option value="2">方寸</option>
            <option value="3">佛门</option>
            <option value="4">自定义</option>
          </select>
        </h1>

        <div class="role">
          <ul>
            <li>
              <b>门派：</b>
              <span class="cname">{{i_roledata[0]}}</span>
            </li>
            <li>
              <b>气血：</b>
              <span class="hp">{{i_roledata[1]}}</span>
            </li>
            <li>
              <b>攻击：</b>
              <span class="atk">{{i_roledata[2]}}</span>
            </li>
            <li>
              <b>防御：</b>
              <span class="def">{{i_roledata[3]}}</span>
            </li>
            <li>
              <b>法伤：</b>
              <span class="def">{{i_roledata[4]}}</span>
            </li>
            <li>
              <b>法抗：</b>
              <span class="adf">{{i_roledata[5]}}</span>
            </li>
            <li>
              <b>速度：</b>
              <span class="spd">{{i_roledata[6]}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div id="t_rolebox" class="cardbox">
        <h1>
          目标角色
          <select id="select_t_role">
            <option value="0">天策</option>
            <option value="1">龙宫</option>
            <option value="2">方寸</option>
            <option value="3">佛门</option>
            <option value="4">自定义</option>
          </select>
        </h1>
        <div id="role">
          <ul>
            <li>
              <b>门派：</b>
              <span class="cname">{{t_roledata[0]}}</span>
            </li>
            <li>
              <b>气血：</b>
              <span class="hp">{{t_roledata[1]}}</span>
            </li>
            <li>
              <b>攻击：</b>
              <span class="atk">{{t_roledata[2]}}</span>
            </li>
            <li>
              <b>防御：</b>
              <span class="def">{{t_roledata[3]}}</span>
            </li>
            <li>
              <b>法伤：</b>
              <span class="def">{{t_roledata[4]}}</span>
            </li>
            <li>
              <b>法抗：</b>
              <span class="adf">{{t_roledata[5]}}</span>
            </li>
            <li>
              <b>速度：</b>
              <span class="spd">{{t_roledata[6]}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <h2>伤害计算公式：(atk*k)-def</h2>
    <div id="huang">
      <table>
        <tr>
          <th>技能类别</th>
          <th>伤害系数（k）</th>
          <th class="yao"></th>
          <th>当前角色</th>
          <th>BUFF</th>
          <th class="yao"></th>
          <th>目标角色</th>
          <th>DEBUFF</th>
          <th class="yao"></th>
          <th>本次伤害</th>
          <th>目标防御/法抗</th>
          <th>最终伤害</th>
        </tr>
        <tr>
          <td>物理伤害</td>
          <td class="c_skill">
            <input type="text" v-model="skill_wuli[0]" />
          </td>
          <td rowspan="3"></td>
          <td rowspan="3" class="i_role">{{i_roledata[0]}}</td>
          <td rowspan="3" class="i_buff">
            +
            <input type="number" v-model="i_buff" />
            攻击
          </td>
          <td rowspan="3"></td>
          <td rowspan="3" class="t_role">{{t_roledata[0]}}</td>
          <td rowspan="3" class="t_debuff">
            -
            <input type="number" v-model="t_debuff" />
            防御
          </td>
          <td rowspan="3"></td>
          <td class="i_atk">{{parseInt(counter[2]*skill_wuli[0])}}</td>
          <td rowspan="3" class="t_def">{{counter[0]}} 防御</td>
          <td class="f_damage">{{damage_wuli[0]}}</td>
        </tr>
        <tr>
          <td>物理伤害·第2段</td>
          <td class="c_skill">
            <input type="text" v-model="skill_wuli[1]" />
          </td>
          <td class="i_atk">{{parseInt(counter[2]*skill_wuli[1])}}</td>
          <td class="f_damage">{{damage_wuli[1]}}</td>
        </tr>
        <tr>
          <td>物理伤害·第3段</td>
          <td class="c_skill">
            <input type="text" v-model="skill_wuli[2]" />
          </td>
          <td class="i_atk">{{parseInt(counter[2]*skill_wuli[2])}}</td>
          <td class="f_damage">{{damage_wuli[2]}}</td>
        </tr>
        <tr>
          <th>技能类别</th>
          <th>伤害系数（k）</th>
          <th class="yao"></th>
          <th>当前角色</th>
          <th>BUFF</th>
          <th class="yao"></th>
          <th>目标角色</th>
          <th>DEBUFF</th>
          <th class="yao"></th>
          <th>本次伤害</th>
          <th>目标防御/法抗</th>
          <th>最终伤害</th>
        </tr>
        <tr>
          <td>法术伤害</td>
          <td class="c_skill">
            <input type="text" v-model="skill_mofa[0]" />
          </td>
          <td rowspan="3"></td>
          <td rowspan="3" class="i_role">{{i_roledata[0]}}</td>
          <td rowspan="3" class="i_buff">
            +
            <input type="number" v-model="i_buff" />
            法伤
          </td>
          <td rowspan="3"></td>
          <td rowspan="3" class="t_role">{{t_roledata[0]}}</td>
          <td rowspan="3" class="t_debuff">
            -
            <input type="number" v-model="t_debuff" />
            法抗
          </td>
          <td rowspan="3"></td>
          <td class="i_atk">{{counter[3]*skill_mofa[0]}}</td>
          <td rowspan="3" class="t_def">{{counter[1]}} 法抗</td>
          <td class="f_damage">{{damage_mofa[0]}}</td>
        </tr>
        <tr>
          <td>法术伤害·第2段</td>
          <td class="c_skill">
            <input type="text" v-model="skill_mofa[1]" />
          </td>
          <td class="i_atk">{{counter[3]*skill_mofa[1]}}</td>
          <td class="f_damage">{{damage_mofa[1]}}</td>
        </tr>
        <tr>
          <td>法术伤害·第3段</td>
          <td class="c_skill">
            <input type="text" v-model="skill_mofa[2]" />
          </td>
          <td class="i_atk">{{counter[3]*skill_mofa[2]}}</td>
          <td class="f_damage">{{damage_mofa[2]}}</td>
        </tr>
      </table>
    </div>
    <up></up>
  </div>
</template>

<script>
import Up from "./components/up";
import RoleData from "./js/role";

export default {
  name: "App",
  data: function () {
    return {
      i_roledata: [
        RoleData.pl.cname,
        RoleData.pl.HP,
        RoleData.pl.ATK,
        RoleData.pl.DEF,
        RoleData.pl.MAG,
        RoleData.pl.ADF,
        RoleData.pl.SPD,
      ],
      t_roledata: [
        RoleData.el.cname,
        RoleData.el.HP,
        RoleData.el.ATK,
        RoleData.el.DEF,
        RoleData.el.MAG,
        RoleData.el.ADF,
        RoleData.el.SPD,
      ],
      counter: [
        0, //目标最终防御
        0, //目标最终法抗
        0, //角色当前物理攻击
        0, //角色当前法术攻击
      ],
      skill_wuli: [1, 1, 1],
      skill_mofa: [1, 1, 1],
      damage_wuli: [0, 0, 0],
      damage_mofa: [0, 0, 0],
      i_Flag: -1,
      t_Flag: -1,
      i_buff: 0,
      t_debuff: 0,
    };
  },
  components: { Up },
  methods: {
    check_1: function () {
      var that = this;
      setInterval(function () {
        var a = $("#select_i_role")[0].value;
        var b = $("#select_t_role")[0].value;

        if (a != that.i_Flag) {
          that.i_Flag = a;
          RoleData.UpdateRole(RoleData.pl, a);
          that.pl_F5(that);
          $("#i_rolebox").attr("class", "cardbox role_" + a);
        }
        if (b != that.t_Flag) {
          that.t_Flag = b;
          RoleData.UpdateRole(RoleData.el, b);
          that.el_F5(that);
          $("#t_rolebox").attr("class", "cardbox role_" + b);
        }
        that.counter_F5(that);
        that.damage_F5(that);
      }, 100);
    },
    pl_F5: function (that) {
      that.$set(that.i_roledata, 0, RoleData.pl.cname);
      that.$set(that.i_roledata, 1, RoleData.pl.HP);
      that.$set(that.i_roledata, 2, RoleData.pl.ATK);
      that.$set(that.i_roledata, 3, RoleData.pl.DEF);
      that.$set(that.i_roledata, 4, RoleData.pl.MAG);
      that.$set(that.i_roledata, 5, RoleData.pl.ADF);
      that.$set(that.i_roledata, 6, RoleData.pl.SPD);
    },
    el_F5: function (that) {
      that.$set(that.t_roledata, 0, RoleData.el.cname);
      that.$set(that.t_roledata, 1, RoleData.el.HP);
      that.$set(that.t_roledata, 2, RoleData.el.ATK);
      that.$set(that.t_roledata, 3, RoleData.el.DEF);
      that.$set(that.t_roledata, 4, RoleData.el.MAG);
      that.$set(that.t_roledata, 5, RoleData.el.ADF);
      that.$set(that.t_roledata, 6, RoleData.el.SPD);
    },
    counter_F5: function (that) {
      that.$set(that.counter, 0, that.t_roledata[3] - parseInt(that.t_debuff));
      that.$set(that.counter, 1, that.t_roledata[5] - parseInt(that.t_debuff));
      that.$set(that.counter, 2, that.i_roledata[2] + parseInt(that.i_buff));
      that.$set(that.counter, 3, that.i_roledata[4] + parseInt(that.i_buff));
    },
    damage_F5: function (that) {
      for (var key in that.damage_wuli) {
        that.$set(
          that.damage_wuli,
          key,
          parseInt(that.counter[2] * that.skill_wuli[key] - that.counter[0])
        );
        that.$set(
          that.damage_mofa,
          key,
          parseInt(that.counter[3] * that.skill_mofa[key] - that.counter[1])
        );
      }
    },
  },
  mounted() {
    this.check_1();
  },
};
</script>

<style>
@import "./assets/scss/main.scss";
@import "./assets/scss/check.scss";
@import "./assets/scss/up.scss";
</style>