package com.Math;

public class MathService { 
    private Calculator calculator;

	public MathService(Calculator calculator) {
		this.calculator=calculator;
		// TODO Auto-generated constructor stub
	}

	public int performAddition(int i, int j) {
		// TODO Auto-generated method stub
		return calculator.add(i,j);
	}  
   
}
