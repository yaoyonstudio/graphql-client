import React, { Component } from 'react';

class Postitem extends Component {
  render() {
    return (
      <article className="Postitem">
        <img src={this.props.data.featured_img} alt={this.props.data.title} />
        <aside>
          <h4>{this.props.data.title}</h4>
          <p className="excerpt">{this.props.data.excerpt}</p>
          <footer>
            <p className="source">文章来源：{this.props.data.source}</p>
            <p className="thumb_up">{this.props.data.thumb_up}</p>
            <p className="thumb_down">{this.props.data.thumb_down}</p>
          </footer>
        </aside>
      </article>
    );
  }
}

export default Postitem;
