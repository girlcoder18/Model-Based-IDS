%
% cyclic pursuit / achievable formation problem (n=7) - Heptagon
clear
M=[-1 1 0 0 0 0;0 -1 1 0 0 0;0 0 -1 1 0 0;0 0 0 -1 1 0; ...
    0 0 0 0 -1 1; 1 0 0 0 0 -1];
F=eye(6);
t=0:0.01:10;
x0=[12+j*3; 12+j*6; 12+j*0; 12-j*3; 12-j*6; 12-j*9];
B=[1.5*exp(((j*2*pi)/6)*1);
   1.5*exp(((j*2*pi)/6)*2); 
   1.5*exp(((j*2*pi)/6)*3);
   1.5*exp(((j*2*pi)/6)*4);
   1.5*exp(((j*2*pi)/6)*5);
   1.5*exp(((j*2*pi)/6)*6)];
sys=ss(M,B,eye(6),0*B);
u=ones(size(t));
y=lsim(sys,u,t,x0);
oend=length(t);
plot(real(y(:,1)),imag(y(:,1)),'-b',real(y(:,2)),imag(y(:,2)),'-g',...
    real(y(:,3)),imag(y(:,3)),'-r',real(y(:,4)),imag(y(:,4)),'-.b',...
    real(y(:,5)),imag(y(:,5)),'-.g', real(y(:,6)),imag(y(:,6)),'-g'), hold on 
plot(real(y(oend,1)),imag(y(oend,1)),'*',real(y(oend,2)),imag(y(oend,2)),'*',...
    real(y(oend,3)),imag(y(oend,3)),'*',real(y(oend,4)),imag(y(oend,4)),'*',...
    real(y(oend,5)),imag(y(oend,5)),'*',real(y(oend,6)),imag(y(oend,6)),'*')
z=[y(oend,1) y(oend,2) y(oend,3) y(oend,4) y(oend,5) y(oend,6) y(oend,1)];
plot(real(z),imag(z)), hold off
axis([-5 20 -20 5]), axis('square'), grid
title('Cyclic Pursuit, Heptagon Formation') % title
