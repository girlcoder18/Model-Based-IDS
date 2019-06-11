%
% cyclic pursuit / achievable formation problem (n=5) - triangle
clear
M=[-1 1 0 0 0;0 -1 1 0 0;0 0 -1 1 0;0 0 0 -1 1;1 0 0 0 -1];
F=eye(5);
t=0:0.01:10;
x0=[-2+j*2; 2-j*2; 4-j*2; j*2; -4];
B=[1.5*exp(((j*2*pi)/5)*1);
   1.5*exp(((j*2*pi)/5)*2); 
   1.5*exp(((j*2*pi)/5)*3);
   1.5*exp(((j*2*pi)/5)*4);
   1.5*exp(((j*2*pi)/5)*5)];
sys=ss(M,B,eye(5),0*B);
u=ones(size(t));
y=lsim(sys,u,t,x0);
oend=length(t);
plot(real(y(:,1)),imag(y(:,1)),'-b',real(y(:,2)),imag(y(:,2)),'-g',...
    real(y(:,3)),imag(y(:,3)),'-r',real(y(:,4)),imag(y(:,4)),'-.b',...
    real(y(:,5)),imag(y(:,5)),'-.g'), hold on 
plot(real(y(oend,1)),imag(y(oend,1)),'*',real(y(oend,2)),imag(y(oend,2)),'*',...
    real(y(oend,3)),imag(y(oend,3)),'*',real(y(oend,4)),imag(y(oend,4)),'*',...
    real(y(oend,5)),imag(y(oend,5)),'*'), 
z=[y(oend,1) y(oend,2) y(oend,3) y(oend,4) y(oend,5) y(oend,1)];
plot(real(z),imag(z)), hold off
axis([-5 5 -5 5]), axis('square'), grid
title('Cyclic Pursuit, Pentagon Formation') % title
