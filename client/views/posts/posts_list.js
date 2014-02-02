Template.postsList.helpers({
	postsWithRank: function(){
		this.posts.rewind();
		return this.posts.map(function(posts, index, cursor) {
			posts._rank = index;
			return posts;
		});
	},
	hasMorePosts: function() {
		this.posts.rewind();
		return Router.current().limit() == this.posts.fetch().length;
	}
	
});


