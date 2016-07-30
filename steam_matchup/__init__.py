from dogpile.cache import make_region
from pyramid.config import Configurator

cache_region = make_region().configure('dogpile.cache.memory')


def main(global_config, **settings):
    settings.update(global_config)
    config = Configurator(settings=settings)

    _session(config)

    config.include('.api', route_prefix='/api')
    config.include('.auth', route_prefix='/auth')

    app = config.make_wsgi_app()
    return app


def _session(config):
    from pyramid.session import SignedCookieSessionFactory
    session_factory = SignedCookieSessionFactory('sup3rs3cr3t')
    config.set_session_factory(session_factory)

