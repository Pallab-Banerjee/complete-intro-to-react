var div = React.DOM.div
var h1 = React.DOM.h1

var myTitle = React.createClass({
	render() {
		return(
			div(null,
				h1(
				{
					style: {
						color: this.props.color
					}
				},
				this.props.title)
			)
		)
	}
})

var MyTitleFact = React.createFactory(myTitle)

var myFirstComponent = (
	div(null,
		MyTitleFact(
			{
				title: 'Props are great!',
				color: 'mediumaquamarine'
			}
		),

		React.createElement(myTitle, 
			{
				title: 'Props are everywere !',
				color: 'peru'
			}
		)
	)
)

ReactDOM.render(myFirstComponent, document.getElementById('app'))