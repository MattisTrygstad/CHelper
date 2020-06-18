import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as CommandsStore from '../store/Commands';

// At runtime, Redux will merge together...
type CommandProps =
    CommandsStore.CommandsState // ... state we've requested from the Redux store
    & typeof CommandsStore.actionCreators // ... plus action creators we've requested
    //& RouteComponentProps<{ startDateIndex: string }>; // ... plus incoming routing parameters

class CHelper extends React.PureComponent<CommandProps>  {

    // This method is called when the component is first added to the document
    public componentDidMount() {
        this.ensureDataFetched();
    }

    private ensureDataFetched() {
        this.props.requestCommands();
    }

    private renderCommandsTable() {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Command line</th>
                        <th>Platform</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.commands.map((command: CommandsStore.Commands) =>
                        <tr key={command.id}>
                            <td>{command.id}</td>
                            <td>{command.desc}</td>
                            <td>{command.line}</td>
                            <td>{command.platform}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    public render() {
        return (
            <React.Fragment>
                <h1 id="tabelLabel">Commands</h1>
                <p>A list of helpfull terminal commands.</p>
                {this.renderCommandsTable()}
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.commands, // Selects which state properties are merged into the component's props
    CommandsStore.actionCreators // Selects which action creators are merged into the component's props
)(CHelper as any);