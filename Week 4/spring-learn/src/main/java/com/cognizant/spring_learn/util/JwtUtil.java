package com.cognizant.spring_learn.util;

import java.util.Date;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

public class JwtUtil {
    public static String generateToken(String username) {
        Algorithm algorithm = Algorithm.HMAC256("secret123456789012345678901234");
        return JWT.create()
            .withSubject(username)
            .withIssuedAt(new Date())
            .withExpiresAt(new Date(System.currentTimeMillis() + 3600000))
            .sign(algorithm);
    }
}
