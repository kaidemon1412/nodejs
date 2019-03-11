// console.log(Mock.mock);
var data_world = Mock.mock('/world',{
    'list|11': [{
        'url|': '../video/',
        'name|': 'neteaseflvplayerv',
        'index|+1': 1,
        'suffix|': '.mp4'
      }]
});

var data_bilibili = Mock.mock('/bilibili',{
    'b_video_list|1-1':[{
      'title':'侠骨丹心-金庸传',
      'url|':'../video/',
      'file_name|':'xgdx-jyz.mp4'
    },{
      'title':'情非泛泛-不得善终',
      'url|':'../video/',
      'file_name|':'qfff-bdsz.mp4'
    }]
});

var Wonderful_list = Mock.mock('/comment',{
  'comment_list|1-1':[{
    'avatar|':'../img/avatar/51.png',
    'user_name|':'sol',
    'comment|':'说到金庸的著作，在那些个主角里面，乔峰乔帮主、张无忌张教主、石破天石帮主、杨过、郭靖、令狐冲等等，哲学看过的电视剧。张教主太渣男，说到我个人最欣赏两个人令狐冲和杨过，亦正亦邪，他们两个最为自由这也是我所向往的。',
  },{
    'avatar|':'../img/avatar/23.png',
    'user_name|':'郭靖',
    'comment|':'真正的英雄，要被当事所钦佩，为后人所敬仰，他必定是忧国忧民、怜悯苍生',
  },{
    'avatar|':'../img/avatar/28.png',
    'user_name|':'杨过',
    'comment|':'侠之大者，为国为民',
  },{
    'avatar|':'../img/avatar/50.png',
      'user_name|':'张三丰',
      'comment|':'这正邪二字原本难分，正派弟子心术不正便是邪徒，邪派中人一心向善，便是正人君子。',
  },{
    'avatar|':'../img/avatar/26.png',
      'user_name|':'妲己',
      'comment|':'情义只为初见，',
  }]
    
});

var comment_new = Mock.mock('/comment-new',{
  'comment_list|1-1':[{
    'avatar|':'../img/avatar/51.png',
    'user_name|':'匿名网友',
    'comment|':'说到金庸的著作，在那些个主角里面，乔峰乔帮主、张无忌张教主、石破天石帮主、杨过、郭靖、令狐冲等等，哲学看过的电视剧。张教主太渣男，说到我个人最欣赏两个人令狐冲和杨过，亦正亦邪，他们两个最为自由这也是我所向往的。',
  },{
    'avatar|':'../img/avatar/23.png',
    'user_name|':'匿名网友',
    'comment|':'说到金庸的著作，在那些个主角里面，乔峰乔帮主、张无忌张教主、石破天石帮主、杨过、郭靖、令狐冲等等，哲学看过的电视剧。张教主太渣男，说到我个人最欣赏两个人令狐冲和杨过，亦正亦邪，他们两个最为自由这也是我所向往的。',
  },{
    'avatar|':'../img/avatar/28.png',
    'user_name|':'匿名网友',
    'comment|':'说到金庸的著作，在那些个主角里面，乔峰乔帮主、张无忌张教主、石破天石帮主、杨过、郭靖、令狐冲等等，哲学看过的电视剧。张教主太渣男，说到我个人最欣赏两个人令狐冲和杨过，亦正亦邪，他们两个最为自由这也是我所向往的。',
  },{
    'avatar|':'../img/avatar/50.png',
      'user_name|':'匿名网友',
      'comment|':'说到金庸的著作，在那些个主角里面，乔峰乔帮主、张无忌张教主、石破天石帮主、杨过、郭靖、令狐冲等等，哲学看过的电视剧。张教主太渣男，说到我个人最欣赏两个人令狐冲和杨过，亦正亦邪，他们两个最为自由这也是我所向往的。',
  },{
    'avatar|':'../img/avatar/26.png',
      'user_name|':'匿名网友',
      'comment|':'说到金庸的著作，在那些个主角里面，乔峰乔帮主、张无忌张教主、石破天石帮主、杨过、郭靖、令狐冲等等，哲学看过的电视剧。张教主太渣男，说到我个人最欣赏两个人令狐冲和杨过，亦正亦邪，他们两个最为自由这也是我所向往的。',
  }]
});
