import React from 'react';

class DetailsRow extends React.Component{
    resultsTV(){
        const url = "https://fwemoviedb.herokuapp.com/3/tv/" + this.props.tv.id;
        window.location.href = url;
    }
    render(){
        return (<table key={this.props.tv.id}>
        <tbody>
          <tr>
            <td>
              <img src={this.props.tv.poster_path} width="150" alt="TV poster"/>
            </td>
            <td>
              <h3>{this.props.tv.title}</h3>
              <p>{this.props.tv.overview}</p>
              <input type="button" onClick={this.resultsTV.bind(this)} value="results" />
            </td>
          </tr>
        </tbody>
      </table>
        )
    }
}

export default DetailsRow;
