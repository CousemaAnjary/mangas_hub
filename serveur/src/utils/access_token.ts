import type { Context } from "hono"
import { deleteCookie, getCookie, setCookie } from "hono/cookie"

const COOKIE_NAME = "access_token"
const MAX_AGE = 60 * 15 // 15 minutes

/**
 * Définit un cookie HTTP-only contenant le token.
 * @param c - Le contexte Hono
 * @param token - Le token JWT à stocker dans le cookie
 */

export const setAccessTokenCookie = (c: Context, token: string): void => {
  setCookie(c, COOKIE_NAME, token, {
    httpOnly: true, // Empêche l'accès via JavaScript
    path: "/", // accessible sur tout le site
    secure: process.env.NODE_ENV === "production", // Utilise Secure en production
    maxAge: MAX_AGE, // Durée de vie du cookie
    sameSite: "Strict", // Empêche l'envoi du cookie dans les requêtes cross-site
  })
}

/**
 * Récupère le cookie HTTP-only contenant le token.
 * @param c - Le contexte Hono
 * @returns Le token JWT ou undefined si le cookie n'existe pas
 */
export const getAccessTokenCookie = (c: Context): string | undefined => {
  return getCookie(c, COOKIE_NAME)
}


/**
 * Supprime le cookie HTTP-only contenant le token.
 * @param c - Le contexte Hono
 */
export const deleteAccessTokenCookie = (c: Context) => {
  deleteCookie(c, COOKIE_NAME, {
    path: "/", // doit correspondre au path du cookie
  })
}
