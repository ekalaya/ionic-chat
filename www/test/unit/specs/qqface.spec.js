/* globals inject */
describe('qqFace Directive', function () {
    var scope;
    var element;
    var root;

    beforeEach(function () {
        module('chat.directive');
    });

    beforeEach(inject(function ($rootScope, $compile,_$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.when('GET', 'dev/static/tab_chat/directives/qqface/qqface.tpl').respond( 
            ['<div class="qq_face " ng-click="chooseFace($event)">',
'            <a title="微笑" type="qq" class="face qqface0">微笑</a>',
'            <a title="撇嘴" type="qq" class="face qqface1">撇嘴</a>',
'            <a title="色" type="qq" class="face qqface2">色</a>',
'            <a title="发呆" type="qq" class="face qqface3">发呆</a>',
'            <a title="得意" type="qq" class="face qqface4">得意</a>',
'            <a title="流泪" type="qq" class="face qqface5">流泪</a>',
'            <a title="害羞" type="qq" class="face qqface6">害羞</a>',
'            <a title="闭嘴" type="qq" class="face qqface7">闭嘴</a>',
'            <a title="睡" type="qq" class="face qqface8">睡</a>',
'            <a title="大哭" type="qq" class="face qqface9">大哭</a>',
'            <a title="尴尬" type="qq" class="face qqface10">尴尬</a>',
'            <a title="发怒" type="qq" class="face qqface11">发怒</a>',
'            <a title="调皮" type="qq" class="face qqface12">调皮</a>',
'            <a title="呲牙" type="qq" class="face qqface13">呲牙</a>',
'            <a title="惊讶" type="qq" class="face qqface14">惊讶</a>',
'            <a title="难过" type="qq" class="face qqface15">难过</a>',
'            <a title="酷" type="qq" class="face qqface16">酷</a>',
'            <a title="冷汗" type="qq" class="face qqface17">冷汗</a>',
'            <a title="抓狂" type="qq" class="face qqface18">抓狂</a>',
'            <a title="吐" type="qq" class="face qqface19">吐</a>',
'            <a title="偷笑" type="qq" class="face qqface20">偷笑</a>',
'            <a title="愉快" type="qq" class="face qqface21">愉快</a>',
'            <a title="白眼" type="qq" class="face qqface22">白眼</a>',
'            <a title="傲慢" type="qq" class="face qqface23">傲慢</a>',
'            <a title="饥饿" type="qq" class="face qqface24">饥饿</a>',
'            <a title="困" type="qq" class="face qqface25">困</a>',
'            <a title="惊恐" type="qq" class="face qqface26">惊恐</a>',
'            <a title="流汗" type="qq" class="face qqface27">流汗</a>',
'            <a title="憨笑" type="qq" class="face qqface28">憨笑</a>',
'            <a title="悠闲" type="qq" class="face qqface29">悠闲</a>',
'        </div>'].join("")
        );
        scope = $rootScope.$new();
        scope.showWXFace = true;
        root = $compile('<qq-face ng-show="showWXFace" select-qq-face="selectQQFace"></qq-face>')(scope);
        $httpBackend.flush();
        element = root.find('a');
    }));

    it('qq-face test start!', function () {
        scope.$digest();
        expect(element.chooseFace).toEqual(undefined);
    });

    it('test dom!', function () {
        scope.$digest();
        expect(element.attr('disabled')).not.toBeDefined();
        console.log("angular.element:", element.length);
        expect(angular.element(element).attr('class')).toEqual("face qqface0");
    });

    it('test chooseFace funtion!', function () {
        scope.$digest();
        expect(root.isolateScope().chooseFace).toBeDefined();
    });

     it('test isolateScope selectQqFace!', function () {
        scope.selectQQFace = function (ee) {};
        // 错误示范
        // spyOn(element, 'selectQqFace');
        scope.$digest();
        expect(root.isolateScope().justTest()).toBeTruthy();
    });

    
});
