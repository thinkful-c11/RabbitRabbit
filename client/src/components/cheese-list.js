export default class CheeseList extends React.Component{
    Constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        const mapMyCheeses=this.props.cheese.map((cheese,index)=>
            <li key={index}{...cheese}>cheese</li>
        );
        return (
            <div className='listMyCheese'>
                <ul>
                    {mapMyCheeses}
                </ul>
            </div>);
    }
}