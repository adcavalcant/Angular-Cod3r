<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pensamento;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;

class PensamentoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = $request->query('q');
        $pensamentos = Pensamento::query();
        if ($query) {
            $pensamentos->where(function ($queryBuilder) use ($query) {
                $queryBuilder->where('conteudo', 'like', '%'.$query.'%')
                    ->orWhere('autoria', 'like', '%'.$query.'%');
            });
        }

        $page = $request->query('_page', 1);
        $perPage = $request->query('_limit', 9);

        $paginator = $pensamentos->paginate($perPage, ['*'], '_page', $page);

        return response()->json($paginator);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Pensamento::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Pensamento::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $pensamento = Pensamento::findOrFail($id);
        $pensamento->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pensamento = Pensamento::findOrFail($id);
        $pensamento->delete();
    }
}
