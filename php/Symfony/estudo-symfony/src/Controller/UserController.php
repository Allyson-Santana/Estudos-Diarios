<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/", name="web_user_")
 */

class UserController extends AbstractController
{
    /**
     * @Route("/user", methods={"GET"}, name="index")
     */
    public function index() : Response
    {
        // $response = new Response();
        // $response->setContent("Implementando formulario de cadastro");
        // return $response;
        return $this->render('user/form.html.twig');
    }
    
    /**
     * @Route("/salvar", methods={"POST"}, name="salvar")
     */
    public function salvar(Request $request) : Response
    {
        dump($request->request->all());
        return new Response("Implementando gravação ao banco de cadastro");         
    }
}