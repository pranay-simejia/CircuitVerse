/* eslint-disable import/prefer-default-export */
export function simulateFSMButton() {
    $(document).off('keydown keyup keypress');

    $('#canvas').off();
    const data = localStorage.getItem('fsm');
    console.log(data);
}
