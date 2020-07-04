/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
    /* code */
    var initCopyCode = function(){
      var copyHtml = '';
      copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
      copyHtml += '  <i class="fa fa-clipboard"></i>';
      // copyHtml += '  <i class="anticon anticon-copy"></i>';
      // copyHtml += '  <button class="VJbwyy" style="position: absolute;  top: 6px;  right: 6px;  display: flex;  justify-content: center;   align-items: center;  width: 32px;  height: 24px;   cursor: pointer;  font-size: 14px;   padding: 0;   border: none;   border-radius: 6px; color: #ccc; background-color: hsla(0,0%,90.2%,.2);  box-shadow: 0 2px 0 0 rgba(0,0,0,.25);  opacity: 0;  visibility: hidden;  -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; transition: opacity .2s ease-in-out,visibility .2s ease-in-out;  z-index: 1;" type="button" aria-label="复制代码"><i aria-label="icon: copy" class="anticon anticon-copy"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="copy" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"></path></svg></i></button>';
      copyHtml += '</button>';
      $(".highlight .code pre").before(copyHtml);
      new ClipboardJS('.btn-copy', {
          target: function(trigger) {
              $('<div>').appendTo('body').addClass('alert alert-success').html('🤠道友ᕦ(･ㅂ･)ᕤ，🥭复制成功了哟(^_−)☆').show().delay(1500).fadeOut();
              return trigger.nextElementSibling;
            }
      });
    }
    initCopyCode();
  }(window, document);