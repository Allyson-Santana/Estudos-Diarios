<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController 
{
    /**
     * @Route("/", methods={"GET"})
     */
    public function index(Request $request) : Response
    {
        $reponse = new Response(); 
        $reponse->setContent(json_encode([
            "respose" => $request->get("name"),
            "IP" => $request->getClientIp()
        ]));
        $reponse->setStatusCode(200);
        return $reponse;
    }
}