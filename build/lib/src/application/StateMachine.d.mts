export default class StateMachine {
    static setupStateMachine(target: any): void;
    /**
     * Creates a state machine implementation.
     * It extends the original type and should be used when creating new instances.
     * The original type is available as static property 'original', and it must be used when subclassing as follows:
     * const type = StateMachine.create(class YourNewStateMachineClass extends YourBaseStateMachineClass.original {  })
     * @param {Class} type
     * @returns {StateMachine}
     */
    static create(type: Class): StateMachine;
    static _getStatesUntilLevel(state: any, level: any): any[];
    static _getSharedState(state1: any, state2: any): any;
    static _getAncestorStates(state: any): any[];
    static _getStateAtLevel(state: any, level: any): any;
    /**
     * Calls the specified method if it exists.
     * @param {string} event
     * @param {*...} args
     */
    fire(event: string, ...args: any[]): any;
    /**
     * Returns the current state path (for example "Initialized.Loading").
     * @returns {string}
     * @protected
     */
    protected _getState(): string;
    /**
     * Returns true iff statePath is (an ancestor of) currentStatePath.
     * @param {string} statePath
     * @param {string} currentStatePath
     * @returns {Boolean}
     * @protected
     */
    protected _inState(statePath: string, currentStatePath?: string): boolean;
    /**
     * Returns true if the specified class member is defined for the currently set state.
     * @param {string} name
     * @returns {boolean}
     * @protected
     */
    protected _hasMember(name: string): boolean;
    /**
     * Returns true if the specified class member is a method for the currently set state.
     * @param {string} name
     * @returns {boolean}
     * @protected
     */
    protected _hasMethod(name: string): boolean;
    /**
     * Switches to the specified state.
     * @param {string} statePath
     *   Substates are seperated by a underscores (for example "Initialized.Loading").
     * @param {*[]} [args]
     *   Args that are supplied in $enter and $exit events.
     * @protected
     */
    protected _setState(statePath: string, args?: any[] | undefined): void;
    _setStateId: number | undefined;
    _callEnter(state: any, args: any[] | undefined, context: any): void;
    _callExit(state: any, args: any[] | undefined, context: any): void;
    __setState(state: any): void;
    _state: any;
    _stateIndex: any;
    constructor: any;
    _initStateMachine(): void;
    _setStateCounter: number | undefined;
    _sm: any;
    _onStateChange: any;
    /**
     * Between multiple member names, select the one specified in the deepest state.
     * If multiple member names are specified in the same deepest state, the first one in the array is returned.
     * @param {string[]} memberNames
     * @returns {string|undefined}
     * @protected
     */
    protected _getMostSpecificHandledMember(memberNames: string[]): string | undefined;
}
//# sourceMappingURL=StateMachine.d.mts.map