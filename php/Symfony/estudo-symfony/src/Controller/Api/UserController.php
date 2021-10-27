<?php

namespace App\Controller\Api;


use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class UserController 
{
    /**
    * @Route("/lista", methods={"GET"}, name="lista")
    */
    public function lista(): JsonResponse
    {
        return new JsonResponse(["Implementando lista na Api"], 404);
    }

    /**
    * @Route("/cadastro", methods={"POST"}, name="cadastro")
    */
    public function cadastro(): JsonResponse
    {
        return new JsonResponse(["Implementando cadastro na Api"], 404);
    }
}