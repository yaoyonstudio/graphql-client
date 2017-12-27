import React, { Component } from 'react';
import Request from '../Request'
import { queryBuilder } from '../helpers'
import Postitem from '../Partial/Postitem'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cates: [],
      posts: [],
      currentCate: null,
      loading: false
    }
    this.loadPost = this.loadPost.bind(this)
  }

  componentWillMount () {
    Request.posts.getPostCates(queryBuilder({ type: 'query', operation: 'postcates', fields: ['id', 'title', 'description'] }), (res) => {
      if (res.data && res.data.postcates && res.data.postcates.length) {
        this.setState({
          cates: res.data.postcates,
          currentCate: res.data.postcates[0].id
        })
        if (this.state.currentCate) {
          this.loadPost(this.state.currentCate)
        }
      }
    })
  }

  loadPost (cateId) {
    if (!cateId) return
    this.setState({
      currentCate: cateId,
      posts: [],
      loading: true
    })
    Request.posts.getPostCates(queryBuilder({ type: 'query', operation: 'postcate', data: { id: parseInt(cateId) }, fields: ['id', 'title', 'description', 'posts {id,title,author,cate,excerpt,source,featured_img,thumb_up,thumb_down,createdAt,updatedAt}'] }), (res) => {
      console.log(res)
      if (res && res.data && res.data.postcate && res.data.postcate.posts && res.data.postcate.posts.length) {
        this.setState({
          posts: res.data.postcate.posts
        })
      }
      this.setState({
        loading: false
      })
    })
  }

  render() {
    return (
      <div className="main home">
        <nav className="PostcatesNav">
          {this.state.cates && this.state.cates.length ? (
            <ul>
              {
                this.state.cates.map((item, index) => {
                  return (
                    <li className={this.state.currentCate === item.id ? 'active' : ''} key={index} onClick={() => this.loadPost(item.id)}>{item.title}</li>
                  )
                })
              }
            </ul>
            ) : (
              <p>没有分类</p>
            )}
        </nav>
        <section className="posts">
          {this.state.posts && this.state.posts.length ? (
              <ul className="postlist">
                {
                  this.state.posts.map((item, index) => {
                    return (
                      <li key={index}>
                        <Postitem data={item}></Postitem>
                      </li>
                    )
                  })
                }
              </ul>
            ) : this.state.loading ? (
              <section className="loading">
                <img src={require('../loading.svg')} alt="正在加载中" />
              </section>
            ) : (
              <p className="nomore">没有文章</p>
          )}
        </section>
      </div>
    );
  }
}

export default Home;
