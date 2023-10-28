<!-- 实现小说封面的展示效果 -->

<script setup>
    import { ref } from 'vue'
    const novelData=ref([
    {'book_id': '7245173896335330341', 'book_name': '阴差阳错穿越斗罗大陆', 'thumb_uri': 'novel-pic/p2o5e8c13b4bc59aa57e90be1134806b685', 'author': '清宫尹', 'category': '衍生同人,系统,穿越,二次元,同人', 'creation_status': 1, 'word_count': 53020, 'read_count': 2087, 'last_chapter_title': '第39章 御兽之湖的位置，幻神岛的情况', 'last_chapter_time': '1698158897', 'book_abstract': '新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！', 'first_chapter_id': '7245187389209969152', 'last_chapter_id': '7293142464813400576', 'thumb_url': 'http://p6-reading-sign.fqnovelpic.com/novel-pic/p2o5e8c13b4bc59aa57e90be1134806b685~tplv-resize:200:260.image?x-expires=1700964283&x-signature=iasJGl%2FlOE9t0%2B2RZD2rlIlGn1E%3D'},
    {'book_id': '7206918648995253286', 'book_name': '凤九穿越斗罗大陆', 'thumb_uri': 'novel-pic/p2o15b9a0147ebdb72e78fbfc4ed099e41c', 'author': '用户35672280', 'category': '衍生同人,异世穿越,团宠,天作之合,双向奔赴,快穿', 'creation_status': 0, 'word_count': 41908, 'read_count': 992, 'last_chapter_title': '第35章 嘉陵关大战2', 'last_chapter_time': '1682374771', 'book_abstract': '白凤九由于过于贪玩而不小心进入了时空黑洞，绑定系统，来到了斗罗大陆的星斗大森林，变成了6岁的模样，她也不知道这是怎么了，在想离开的时候遇到了从供奉殿偷跑出来玩的光翎，并被带回了供奉殿，并成为了光翎的徒弟，后来他们相爱了，一起守护供奉殿.（本文反主角，斗路大陆是白凤九的飞升历劫，本文凤九和原世界东华帝君并不相识，在最后由于成功度劫实力大增，并有系统帮忙，拥有了穿梭三千小世界的力量）', 'first_chapter_id': '7206918690166538789', 'last_chapter_id': '7222480851756548660', 'thumb_url': 'http://p3-reading-sign.fqnovelpic.com/novel-pic/p2o15b9a0147ebdb72e78fbfc4ed099e41c~tplv-resize:200:260.image?x-expires=1700964283&x-signature=tKO%2FybVhr3v6olv9yIUAozCUMro%3D'},
    {'book_id': '7269021106978163768', 'book_name': '斗罗之摆烂玉小刚', 'thumb_uri': 'novel-pic/p2o8eb768aa25531643d445050bfd123e16', 'author': '朝風道', 'category': '衍生同人,穿越,二次元,同人', 'creation_status': 1, 'word_count': 255890, 'read_count': 6617, 'last_chapter_title': '第92章 明家', 'last_chapter_time': '1698336008', 'book_abstract': '玉潜一朝猝死后，穿越到莽荒大陆。别人都是穿越成主角，他却穿越成里面最著名的废柴、主角命定中的师傅！\n玉潜穿越的前身本是大家族嫡系子弟，有着非同一般的地位，可命运总喜欢和他开玩笑。\n幼年时图腾变异被家族舍弃、缕缕尝试突破命运的枷锁，却缕缕被命运击败！\n中年时女友背离，未婚妻分散，修行止步不前。\n多年的痛苦只有知识是唯一的慰藉，因为修为过低，发表的知识遭到整个莽荒大陆的嘲笑！\n命运的前路已被安排，且看玉潜如何通过努力，更改自身命运，并成功抱上主角的大腿，开始享受逍遥快乐的摆烂人生！\n……\n徒儿，为师要去游历大陆，你给我一件法器傍身呗……\n徒儿，你还有没有钱，为师身上没了……\n徒儿，你已经长大了，为师要回家了……\n——————\n【OS：感谢各位读者的支持，原来写的是前传的故事，因为各种原因，所有内容全部修改了，还好故事还属于我，所以，故事会以另一种方式进行下去！再次感谢各位的支持！】', 'first_chapter_id': '7269607000559616568', 'last_chapter_id': '7293572273863131688', 'thumb_url': 'http://p6-reading-sign.fqnovelpic.com/novel-pic/p2o8eb768aa25531643d445050bfd123e16~tplv-resize:200:260.image?x-expires=1700964283&x-signature=ciTcQLT0txM%2Bia64K7qzP1yUx5E%3D'},
    {'book_id': '7178933236066683908', 'book_name': '斗罗大陆：新生', 'thumb_uri': 'novel-pic/p2od521d1ef6e2add5921a194629d7c064e', 'author': '莫小柏', 'category': '玄幻脑洞,单女主,重生', 'creation_status': 1, 'word_count': 28825, 'read_count': 286, 'last_chapter_title': '第 11章 三个月', 'last_chapter_time': '1693502354', 'book_abstract': '这个世界没有魔法，没有武术，没有系统，却有神奇的武魂。传灵塔创立5千年后的斗罗大陆遭受变革，五歌能否改变命运，获得新生?\n元素武魂，寄宿在五歌精神之海的神秘人，导致大陆受到变革的邪恶组织，五歌能否扭转命运，改变大陆的结局。一切尽在《斗罗大陆·新生》', 'first_chapter_id': '7178945472407536128', 'last_chapter_id': '7247911875973743107', 'thumb_url': 'http://p9-reading-sign.fqnovelpic.com/novel-pic/p2od521d1ef6e2add5921a194629d7c064e~tplv-resize:200:260.image?x-expires=1700964283&x-signature=Gj%2FUXYyjatGrlXdbzgSbiWRAu%2Bc%3D'},
    {'book_id': '7157712967499254821', 'book_name': '斗罗大陆龙神赵立', 'thumb_uri': 'novel-pic/p2oab0b5cd2bdea8c282e1a9e3060ed2d6f', 'author': '喜欢果松的曹老爷子', 'category': '传统玄幻,玄幻,扮猪吃虎,穿越', 'creation_status': 1, 'word_count': 69830, 'read_count': 366, 'last_chapter_title': '第 十章 史莱克学院 不动明王赵无极', 'last_chapter_time': '1695776809', 'book_abstract': '这是一个科技与武功并存的世界是一座被省神明隔绝的大陆千百年来人类与野兽的争斗从来都没有停止直到有人无意中发现了人类可以击杀魂兽来获取魂环从而达到对抗强大的魂兽而我们的主角则是一个误打误撞来到这里的一个穿越者前世种种原因使他万念俱灰最终跳下诛仙台两并且穿越到了这里他将带着前世的记忆在这片大陆大展宏图', 'first_chapter_id': '7157976340925579776', 'last_chapter_id': '7282768577160020543', 'thumb_url': 'http://p3-reading-sign.fqnovelpic.com/novel-pic/p2oab0b5cd2bdea8c282e1a9e3060ed2d6f~tplv-resize:200:260.image?x-expires=1700964283&x-signature=a5Ww%2F5vxAqS1En8cDdRmSnT0tSI%3D'},
    {'book_id': '7282027273509669922', 'book_name': '斗罗大陆之澜翎', 'thumb_uri': 'novel-pic/p2o4ba272a9dd071ff370dea62fda4484a3', 'author': '墨锦渊', 'category': '玄幻言情,一见钟情,天才,日久生情', 'creation_status': 1, 'word_count': 1005, 'read_count': 35, 'last_chapter_title': '第1章 下界，身份', 'last_chapter_time': '1697249438', 'book_abstract': '嘉岭关--武魂殿，几位供奉正在激烈的和主角团打架，可是到了最后无一生还，突然一位美丽的女子给他们重生的一次机会，他们记下了她的样貌，尤于女子的魂力消耗待尽，她的身体慢慢消失在他们眼帘。在场的人十分伤心，女子的身份是什么？光翎重生了吗？这些事情请看正文！', 'first_chapter_id': '7289623216434184739', 'last_chapter_id': '7289623216434184739', 'thumb_url': 'http://p3-reading-sign.fqnovelpic.com/novel-pic/p2o4ba272a9dd071ff370dea62fda4484a3~tplv-resize:200:260.image?x-expires=1700964283&x-signature=7HCdAHUK3a%2BwSY3uSaowuq8zw9U%3D'},
    {'book_id': '7254133472774589472', 'book_name': '斗罗大陆双星对决', 'thumb_uri': 'novel-pic/p2ofb3e7ff25e93fec6c824eb44e206e5f1', 'author': '一家规', 'category': '都市修真,玄幻,东方玄幻,诸天万界,穿越', 'creation_status': 1, 'word_count': 23871, 'read_count': 33, 'last_chapter_title': '第7章 斗斌学院开学季下册', 'last_chapter_time': '1694242676', 'book_abstract': '新作品出炉，欢迎大家前往番茄小说阅读我的作品，希望大家能够喜欢，你们的关注是我写作的动力，我会努力讲好每个故事！', 'first_chapter_id': '7254380614558843429', 'last_chapter_id': '7269992259867640372', 'thumb_url': 'http://p9-reading-sign.fqnovelpic.com/novel-pic/p2ofb3e7ff25e93fec6c824eb44e206e5f1~tplv-resize:200:260.image?x-expires=1700964283&x-signature=np9XAxj%2Bfz7tZ5lHJPWlA%2B%2Fbu2s%3D'},
    {'book_id': '7198455813860494369', 'book_name': '斗罗大陆之死神斗罗', 'thumb_uri': 'novel-pic/p2of17b1cbebc30c127ef993305f79932f3', 'author': '是个小彭友', 'category': '衍生同人,二次元,同人', 'creation_status': 1, 'word_count': 63510, 'read_count': 2988, 'last_chapter_title': '第48章 六个月', 'last_chapter_time': '1678371344', 'book_abstract': '天命大陆，命兽主宰世界，人类弱小，人类唯有反抗才能生存，这是一个从弱到强，人类一步一步成为主宰的世界，因为一场场剧变，李天慢慢成长为死神的故事，欢迎走进死神的世界', 'first_chapter_id': '7198462086668616227', 'last_chapter_id': '7205939504719495713', 'thumb_url': 'http://p9-reading-sign.fqnovelpic.com/novel-pic/p2of17b1cbebc30c127ef993305f79932f3~tplv-resize:200:260.image?x-expires=1700964283&x-signature=Gw9hnvvAKF0%2BW8%2F5gTEK%2BVh7oew%3D'},
    {'book_id': '7184027141397285920', 'book_name': '穿越斗罗大陆之拯救光翎', 'thumb_uri': 'novel-pic/p2o233518960f9d2e9b57f86291083d343e', 'author': '清翎语', 'category': '游戏体育', 'creation_status': 0, 'word_count': 34391, 'read_count': 1810, 'last_chapter_title': '第0章 番外篇', 'last_chapter_time': '1673587101', 'book_abstract': '女主穿到斗罗大陆成为八供奉拯救光翎于嘉陵关后与光翎开启了斗罗人生，和光翎斗罗一起守护斗罗大陆，和其他供奉的日常！', 'first_chapter_id': '7184027285140275772', 'last_chapter_id': '7187969027338142263', 'thumb_url': 'http://p6-reading-sign.fqnovelpic.com/novel-pic/p2o233518960f9d2e9b57f86291083d343e~tplv-resize:200:260.image?x-expires=1700964283&x-signature=Ns3jLEbMLQg9j%2BhTQYntgyF1C64%3D'},
    {'book_id': '7235294875736869921', 'book_name': '快穿！斗罗大陆', 'thumb_uri': 'novel-pic/p2o331380d28b0c39a5389ea6d6df10dc80', 'author': '青栀子花的思念', 'category': '科幻,武侠,女强,穿书', 'creation_status': 1, 'word_count': 14287, 'read_count': 155, 'last_chapter_title': '第 十章 争抢魂兽', 'last_chapter_time': '1698160424', 'book_abstract': '（内容与原文，不喜勿看）我穿越到斗罗大陆，是冰月塔塔主（洛天）的女儿，觉醒武魂后出家历练，加入史莱克学院，魂师大赛后，勇闯杀戮之都，历练海神岛，最后成神的故事', 'first_chapter_id': '7273756791253664275', 'last_chapter_id': '7290866927088435752', 'thumb_url': 'http://p9-reading-sign.fqnovelpic.com/novel-pic/p2o331380d28b0c39a5389ea6d6df10dc80~tplv-resize:200:260.image?x-expires=1700964283&x-signature=2R%2FYdntmiX3y5QuR%2FnToDxRkRnE%3D'}
    ])

    // 定义一个函数截取简介的字符串操作部分不显示

    const subAbstract=(abstract)=>{
        // 最大长度是30个字符
        const maxAbstract=70
        if(abstract.length>=maxAbstract){
            return abstract.slice(0,maxAbstract)+'...'
        }else{
            return abstract
        }
    }

    // 计算最近的更新时间

    const lastTime=(timestamp)=>{
        // 获取当前时间戳
        const nowTime=new Date()
        const lastTime=new Date( parseInt(timestamp)*1000)
        console.log(nowTime,lastTime);
        // 两个时间戳相减的到相差的秒数
        const distanceTime=Math.abs(nowTime-lastTime)
        // 将毫秒数转换为天数
        const millisecondsPerDay = 1000 * 60 * 60 * 24; // 每天的毫秒数
        const day=Math.floor(distanceTime/millisecondsPerDay)
        if(day>0){
            return day
        }else{
            return 1
        }
    
    }
</script>
<template>
   <div class="box" >
    <div class="book_box" v-for="item in novelData" :key='item'>
        <div class="cover">
            <div class="book_shadow"></div>
            <div class="book_cover">
                <img :src="item.thumb_url" alt="暂无封面">
            </div>
            <div class="book_effect"></div>
        </div>
        <div class="content">
            <div class="title">
                {{ item.book_name }}
            </div>
            <div class="author">
                <div>
                    作者：{{item.author}}
                </div>
                <div>
                    <!-- 创作状态 -->
                    {{item.creation_status===0?'已完结':'连载中'}}·
                    {{ item.category.split(',')[0] }}·
                    {{ item.category.split(',')[1] }}·
                    {{ item.category.split(',')[2] }}
                </div>
                <div>
                    {{(item.word_count/10000).toFixed(1)}}万字·{{item.read_count}}人在读
                </div>
            </div>
            <div class="abstract">
                {{subAbstract(item.book_abstract)}}
            </div>
            <div class="footer">
                <div>
                    <a href="#">最新章节：{{item.last_chapter_title}}</a>
                    <span>{{ lastTime(item.last_chapter_time)+'天前'}}</span>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>


<style scoped>
.box{
    height: 200px;
}
.book_box{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    /* background-color: #4abe14; */
}
.cover{
    flex: 0 0 auto;
    width: 100px;
    height: 130px;
    cursor: pointer;
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin-left: 5px;
    background-image: url('@/assets/bookbgc.png');
    border-radius: 4px;
    background-size: 100% 100%;
}
.cover>div{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
}
.book_shadow{
    background: url("@/assets/book_effect.png");
    background-size: 100% 100%;
}
.book_cover img {
    width: 100%;
    height: 100%;
    transition: all .3s ease;
}
.book_effect{
    background: url("@/assets/book_effect.png");
    background-size: 100% 100%;
}

.cover:hover img{
    transform: scale(1.15); /* 鼠标经过时放大 1.2 倍 */
}
.content{
    position: relative;
    height: 130px;
    width: calc(100% - 110px);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.content>div{
    /* background-color: #b7ca2b; */
    position: absolute;
    left: 10px;
    margin: 2px 0;
    width: 100%;
}
.title{ 
    top: 0;
    align-items: center;
    font-weight: 700;
    /* line-height: 30px; */
    color: #000000;
}
.author{
    top: 30px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    /* height: 20px; */
    /* line-height: 20px; */
    font-size: 10px;
    color: rgba(0,0,0,.4);
}
.author>div{
    margin-right: 10px;
}

.abstract{
    top: 60px;
    font-size: 10px;
    height: 50px;
    color: rgba(0,0,0,.4);
}
.footer{
    bottom: 0;
    font-size: 10px;
    height: 20px;
    line-height: 20px;
    color: rgba(0,0,0,.4);
}
.footer a{
    color: rgba(0,0,0,.4);
    padding-right: 10px;
}

/* 设置a标签的统一样式 */
a:hover{
  color: #fa6725;
}
a:active{
  color: #0c32ed;
}


</style>
