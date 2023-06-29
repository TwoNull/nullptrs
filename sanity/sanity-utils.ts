import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import { Social } from "@/types/Social";
import { Article } from "@/types/Article";
import clientConfig from './config';

export function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      url,
      desc
    }`
  )
}

export function getSocials(): Promise<Social[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "social"]{
      _id,
      _createdAt,
      name,
      href
    }`
  )
}

export function getArticles(): Promise<Article[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      unlisted
    }`
  )
}

export function getArticle(slug: string): Promise<Article> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      headimage,
      desc,
      content
    }`,
    { slug }
  )
}

