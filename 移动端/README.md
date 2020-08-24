移动端兼容很好  主要是webkit内核

视口（viewport）就是浏览器显示页面内容的屏幕区域   布局视口、视觉视口和理想视口

理想视口 需要添加meta视口标签  就是手机屏幕有多宽我们的布局视口就有多宽
                               理想视口           是否允许缩放yes/no   视口默认1.0     最大1.0    最小1.0
<meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0,maximum=1.0,minimum-scale=1.0">

二倍图
物理像素和像素比
pc端的1px就是1px
移动端的1px就是2px(iphone8)


移动端主流方案
1、单独制作移动端页面
通常网站前面带有一个m(mobile) 通过判断设备，如果是移动端就跳转

移动端常见的布局
流动布局（百分比布局）
    通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充
    但是有个小bug是不能特别特别小会塌陷
    可以用max-width和min-width来限制它










flex弹性布局
less+rem+媒体查询
混合布局

2、响应式页面兼容移动端
移动端常见的布局
媒体查询
bootstarp

缺点：
    制作麻烦，需要花费很多时间去调兼容性问题


移动端特殊样式
//点击高亮我们需要清除  设置为transparent 透明
-webkit-tap-highlight-color: transparent;
//在移动端浏览器默认的外观在ios上加上这个属性才能给按钮和输入框自定义样式
-webkit-appearance:none;
//禁用长按页面时的弹出菜单
img,a {
    -webkit-touch-callout:none;
}
