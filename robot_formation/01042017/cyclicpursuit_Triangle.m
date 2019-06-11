%
% cyclic pursuit / achievable formation problem (n=5) - triangle
clear
M=[-1 1 0;0 -1 1;1 0 -1];
F=eye(3);
t=0:0.2:10;
x0=[1.012+j*0.602; -2.225+j*0.735; -3.152+j*0.087];
B=[1.5*exp(((j*2*pi)/3)*1);
   1.5*exp(((j*2*pi)/3)*2); 
   1.5*exp(((j*2*pi)/3)*3)];
sys=ss(M,B,eye(3),0*B);
u=ones(size(t));
y=lsim(sys,u,t,x0);
oend=length(t);
plot(real(y(:,1)),imag(y(:,1)),'-b',real(y(:,2)),imag(y(:,2)),'-g',...
    real(y(:,3)),imag(y(:,3)),'-r'), hold on 
plot(real(y(oend,1)),imag(y(oend,1)),'*',real(y(oend,2)),imag(y(oend,2)),'*',...
    real(y(oend,3)),imag(y(oend,3)),'*'), 
z=[y(oend,1) y(oend,2) y(oend,3) y(oend,1)];
plot(real(z),imag(z)), hold off
axis([-5 5 -5 5]), axis('square'), grid
title('Cyclic Pursuit, Pentagon Formation') % title
