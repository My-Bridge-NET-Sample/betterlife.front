var dataTable = {
    pageSelectType: 1,
    chinese: {
        "sProcessing"    : "处理中...",
        "sLengthMenu"    : "显示 _MENU_ 项结果",
        "sZeroRecords"   : "没有匹配结果",
        "sInfo"          : "共 _TOTAL_ 项",
        "_sInfo"         : "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
        "sInfoEmpty"     : "显示第 0 至 0 项结果，共 0 项",
        "sInfoFiltered"  : "(由 _MAX_ 项结果过滤)",
        "sInfoPostFix"   : "",
        "sSearch"        : "搜索:",
        "sUrl"           : "",
        "sEmptyTable"    : "表中数据为空",
        "sLoadingRecords": "载入中...",
        "sInfoThousands" :  ",",
        "oPaginate"      : {
            "sFirst"   :    "首页",
            "sPrevious": "上一页",
            "sNext"    :     "下一页",
            "sLast"    :     "末页"
        },
        "oAria"          : {
            "sSortAscending" :  ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
        }
    },
    pageNumDisplay:function(dataTableThis){
        var self=dataTableThis;
        if (this.pageSelectType==1){
            var info = self.api().page.info();
            var currentPage=info.page+1;
            var totalPages=info.pages;
            var pageSelectOptions="";
            for (var int = 0; int < totalPages; int++) {
                var showPageNum=int+1;
                if (int==currentPage-1){
                    pageSelectOptions+='<option value="'+showPageNum+'" selected>'+showPageNum+'</option>';
                }else{
                    pageSelectOptions+='<option value="'+showPageNum+'">'+showPageNum+'</option>';
                }
            }
            $(dataTableThis.selector+'_ellipsis').before('<li class="paginate_button "><a href="#" tabindex="1" style="padding:2px 12px; margin-bottom: 0px;"><select class="redirect_page" style="height: 26px; font-size: 14px;text-align: center; margin:0 -5px;">'+pageSelectOptions+'</select></a></li>');
            $('.redirect_page').change(function(e){
                var sefRedirect=this;
                if($(sefRedirect).val() && $(sefRedirect).val()>0){
                    var redirectpage = $(sefRedirect).val()-1;
                }else{
                    var redirectpage = 0;
                }
                self.fnPageChange( redirectpage );
            });
        }else{
            $(dataTableThis.selector+'_ellipsis').before('<li class="paginate_button "><a href="#" tabindex="1" style="padding:2px 12px; margin-bottom: 0px;"><input type="text" class="redirect_page" style="width: 30px; height: 26px; font-size: 14px;text-align: center; margin:0 -5px;"></a></li>');
            var globalTimeout = null;
            $('.redirect_page').keyup(function(e){
                var sefRedirect=this;
                if(globalTimeout != null) clearTimeout(globalTimeout);
                   globalTimeout=setTimeout(function(){
                   if($(sefRedirect).val() && $(sefRedirect).val()>0){
                       var redirectpage = $(sefRedirect).val()-1;
                   }else{
                       var redirectpage = 0;
                   }
                   self.fnPageChange( redirectpage );
                   if(globalTimeout != null) clearTimeout(globalTimeout);
                },500);
            });
        }
        $('.redirect_page').parent().click(function(e){
            e.preventDefault();
        });
    }
};

$(function(){
  $.extend({"dataTable":dataTable});
  //中文排序
  jQuery.fn.dataTableExt.oSort['chinese-string-asc']  = function(s1,s2) {
      return s1.localeCompare(s2);
  };
  jQuery.fn.dataTableExt.oSort['chinese-string-desc'] = function(s1,s2) {
      return s2.localeCompare(s1);
  };

});
