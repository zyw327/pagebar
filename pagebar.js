class PageBar{
	/**
	 * 构造函数
	 * @param  int pagenow    设置当前页码
	 * @param  int pagesize   设置每页显示的条数
	 * @param  int totalCount 设置总的条数
	 * @param  int pagecount  设置每页显示的页码数
	 * @param  String url     设置跳转的链接
	 */
	constructor(pagenow, pagesize, totalCount, pagecount, url){
		this.pagenow = pagenow || 1;
		this.pagesize = pagesize || 20;
		this.totalCount = totalCount || 1;
		this.pagecount = pagecount || 10;
		this.url = url || "";
	}

	/**
	 * 设置当前页码
	 * @param int pagenow [description]
	 */
	setPageNow(pagenow){
		this.pagenow = pagenow || 1;
	}

	/**
	 * 设置每页显示的条数
	 * @param int pagesize [description]
	 */
	setPagesize(pagesize){
		this.pagesize = pagesize || 20;
	}

	/**
	 * 设置总的条数
	 * @param int totalCount [description]
	 */
	setTotalCount(totalCount){
		this.totalCount = totalCount || 1;
	}

	/**
	 * 设置每页显示的页码数
	 * @param int pageCount [description]
	 */
	setPageCount(pageCount){
		this.pagecount = pageCount || 10;
	}

	/**
	 * 设置跳转的链接
	 * @param String url [description]
	 */
	setUrl(url){
		this.url = url || "";
	}

	/**
	 * 获取分页的html代码
	 * @return String
	 */
	getPageBar(){
		let tpcount = Math.ceil(this.totalCount / this.pagesize);
		if (tpcount <= 1) {
			return '';
		}
		if (this.pagenow > tpcount) {
			this.pagenow = tpcount;
		}
		let start = (Math.ceil(this.pagenow / this.pagecount) - 1) * this.pagecount + 1;
		let end = this.pagecount * (Math.ceil(this.pagenow / (this.pagecount)));
		if (tpcount < end ) {
			end = tpcount;
		}
		let html = '<nav aria-label="Page navigation">';
		html += '<ul class="pagination">'
		html += '<li>';
		html += '<a href="' + this.url + 'pagenow=' + ((this.pagenow-1) < 1 ? 1 : this.pagenow-1) + '" aria-label="Previous">';
		html += '<span aria-hidden="true">&laquo;</span>';        
		html += '</a>';
		html += '</li>';
		for (var i = start; i <= end; i++){ 
			if ( i == this.pagenow) {
				html += '<li class="active"><a href="' + this.url + "pagenow=" + i + '">' + i + '</a></li>';
			} else {
				html += '<li><a href="' + this.url + 'pagenow=' + i + '">' + i + '</a></li>';
			}
		}
		html += '<li>';
		html += '<a href="' + this.url + 'pagenow=' + ((parseInt(this.pagenow) + 1) > tpcount ? tpcount : parseInt(this.pagenow) + 1) + '" aria-label="Next">';
		html += '<span aria-hidden="true">&raquo;</span>';      
		html += '</a>';        
		html += '</li>';      
		html += '<li><span aria-hidden="true">共' + tpcount + '页</span></li>';    
		html += '</ul>';    
		html += '</nav>';
		return html;
	}
}
module.exports = PageBar;