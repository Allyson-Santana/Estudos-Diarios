<?php

namespace Allyson\SearchCep\tests;

use PHPUnit\Framework\TestCase;
use Allyson\SearchCep\Search;

class SearchTest extends TestCase
{
    /**
     * @dataProvider dateTest
     */
    public function testGetAddressFromZipcodeDefaultUsage(string $input, array $result): void
    {
        $search = new Search();
        $search = $search->getAddressFromZipcode($input);

        $this->assertEquals($search, $result);
    }

    public function dateTest(): array
    {
        return [
            "Primeiro Endereço" => [
                "11335000",
                [
                    "cep" => "11335-000",
                    "logradouro" => "Rua Cidade de Santos",
                    "complemento" => "",
                    "bairro" => "Planalto Bela Vista",
                    "localidade" => "São Vicente",
                    "uf" => "SP",
                    "ibge" => "3551009",
                    "gia" => "6579",
                    "ddd" => "13",
                    "siafi" => "7121"
                ],
            ],
            "Segundo Endereço" => [
                "11335340",
                [
                    "cep" => "11335-340",
                    "logradouro" => "Rua Engenheiro André Rebouças",
                    "complemento" => "",
                    "bairro" => "Vila Mateo Bei",
                    "localidade" => "São Vicente",
                    "uf" => "SP",
                    "ibge" => "3551009",
                    "gia" => "6579",
                    "ddd" => "13",
                    "siafi" => "7121"
                ],
            ],

        ];
    }
}
