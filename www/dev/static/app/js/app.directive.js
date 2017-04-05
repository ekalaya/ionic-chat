/**
 * 指令集
 */
angular.module('app.directive', [])
    // 微信分享
    .directive("clickShare", ["$ionicActionSheet", function ($ionicActionSheet) {
        return {
            scope: false,
            restrict: 'A',
            replace: false,
            link: function (scope, iElm, iAttrs) {
                var buttons = [
                    {
                        id: "check-installed",
                        label: "是否安装了微信"
                    },
                    {
                        id: "send-text",
                        label: "发送Text消息给微信"
                    },
                    {
                        id: "send-photo-local",
                        label: "发送Photo消息给微信(本地图片)"
                    },
                    {
                        id: "send-photo-remote",
                        label: "发送Photo消息给微信(远程图片)"
                    },
                    {
                        id: "send-link-thumb-local",
                        label: "发送Link消息给微信(本地缩略图)"
                    },
                    {
                        id: "send-link-thumb-remote",
                        label: "发送Link消息给微信(远程缩略图)"
                    },
                    {
                        id: "send-app",
                        label: "发送App消息给微信"
                    }
                ];
                iElm.bind("click", function (evt) {
                    var dialog = $ionicActionSheet.show({
                        buttons: [{
                            text: '<i class="ic ic-weixin"></i>微信好友'
                        },
                        {
                            text: '<i class="ic ic-weixin-moment"></i>发朋友圈'
                        }],
                        cssClass: "share-sheet",
                        cancelText: "取消",
                        cancel: function () { },
                        buttonClicked: function (e) {
                            // 0：会话，1:朋友圈，2: 收藏
                            switch (e) {
                                case 0:
                                    share(0, "send-text");
                                    break;
                                case 1:
                                    share(1, "send-text");
                                    break;
                            }
                        }
                    });
                    evt.stopPropagation()
                });
            }
        }
    }])
    ;
