﻿import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface CommandsState {
    commands: Commands[];
}

export interface Commands {
    id: number;
    desc: string;
    line: string;
    platform: string;
}

export interface NewCommand {
    desc: string;
    line: string;
    platform: string;
}

export interface CommandState {
    command: NewCommand;
}


// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestGetCommandsAction {
    type: 'REQUEST_COMMANDS';
}

interface ReceiveGetCommandsAction {
    type: 'RECEIVE_COMMANDS';
    commands: Commands[];
}

interface RequestAddCommandAction {
    type: 'ADD_COMMAND';
    command: NewCommand;
}

interface ReceiveAddCommandAction {
    type: 'ADD_COMMAND';
    command: NewCommand;
}



// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).

type GetCommandsKnownAction = RequestGetCommandsAction | ReceiveGetCommandsAction;

type AddCommandKnownAction = RequestAddCommandAction | ReceiveAddCommandAction;



// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestCommands: (): AppThunkAction<GetCommandsKnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState) {
            fetch('api/commands')
                .then(response => response.json() as Promise<Commands[]>)
                .then(data => {                    
                    dispatch({ type: 'RECEIVE_COMMANDS', commands: data });
                });

            dispatch({ type: 'REQUEST_COMMANDS'});
        }
    }
    addCommand: (): AppThunkAction
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: CommandsState = { commands: [] };
export const reducer: Reducer<CommandsState> = (state: CommandsState | undefined, incomingAction: Action): CommandsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as GetCommandsKnownAction;
    switch (action.type) {
        case 'REQUEST_COMMANDS':
            return {
                commands: state.commands,
            };
        case 'RECEIVE_COMMANDS':
            return {
                commands: action.commands,
            };
    }
    return state;
};
