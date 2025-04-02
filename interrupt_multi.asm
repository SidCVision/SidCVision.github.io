ORG 0000H
LJMP MAIN // interrupt vector is bypassed by main program
ORG 000BH // ISR of Timer 0 at its vector address
CLR TR0 // stop Timer 0
CPL P1.0 // toggle P1.0 to generate square wave
MOV TH0, #0FCH // reload count in Timer 0
MOV TL0, #18H
SETB TR0 // start Timer 0 again
RETI // return to the main program
ORG 001BH // ISR of Timer 1 at its vector address
CPL P2.0 // toggle P2.0 to generate square wave
RETI // return to the main progrm
ORG 0100H // main program starts at address 100H
MAIN: MOV TMOD, #21H // Timer 1 Mode 2, Timer 0 Mode 0
MOV IE, #8AH // enable Timer 0 and 1 interrupts
MOV TH0, #0FCH // load count in the timer registers
MOV TL0, #18H
MOV TH1, #0CEH
ORL TCON, #50H // start both timers without affecting other bits equivalent to SETB TR0 and SETB TR1
HERE: SJMP HERE // wait until any of the timer overflows
END