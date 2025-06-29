package com.Math;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;

public class MathServiceTest {

    @Test
    public void testArgumentMatching() {
        Calculator mockCalculator = mock(Calculator.class);
        when(mockCalculator.add(ArgumentMatchers.eq(5), ArgumentMatchers.eq(3))).thenReturn(8);

        MathService service = new MathService(mockCalculator);
        int result = service.performAddition(5, 3);

        assertEquals(8, result);
        verify(mockCalculator).add(5, 3);
    }
}
