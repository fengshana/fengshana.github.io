/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
    /* code */
    var initCopyCode = function(){
      var copyHtml = '';
      copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
      copyHtml += '  <i class="fa fa-clipboard"></i><span>COPY</span>';
      copyHtml += '</button>';
      $(".highlight .code pre").before(copyHtml);
      new ClipboardJS('.btn-copy', {
          target: function(trigger) {
              $('<div>').appendTo('body').addClass('alert alert-success').html('道友ᕦ(･ㅂ･)ᕤ，复制成功了哟(^_−)☆').show().delay(1500).fadeOut();
              return trigger.nextElementSibling;
            }
      });
    }
    initCopyCode();
  }(window, document);